import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import { fetchPostsAndPhotos } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage] = useState(8);
  const [searchValues, setSearchValues] = useState("");

  const noMorePosts = page + postPerPage >= allPosts.length;
  const filteredPosts = !!searchValues
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValues.toLowerCase());
      })
    : posts;

  const loadPosts = useCallback(async (page, postPerPage) => {
    const postsAndPhotos = await fetchPostsAndPhotos();
    setPosts(postsAndPhotos.slice(page, postPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    loadPosts(0, postPerPage);
  }, [loadPosts, postPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValues(value);
  };

  return (
    <section className="container">
      <TextInput searchValues={searchValues} handleChange={handleChange} />
      {filteredPosts.length > 0 ? (
        <Posts posts={filteredPosts} />
      ) : (
        <>{filteredPosts.length === 0 && <p>Título não encontrado :(</p>}</>
      )}
      <div className="button-container">
        {!searchValues && (
          <Button
            disabled={noMorePosts}
            text="More posts"
            onClick={loadMorePosts}
          />
        )}
      </div>
    </section>
  );
};
