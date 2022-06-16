import "./style.css";
import { Component } from "react";
import { fetchPostsAndPhotos } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 8,
    searchValues: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await fetchPostsAndPhotos();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    console.log("oi");
    const { page, postPerPage, allPosts, posts } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValues: value });
  };

  render() {
    const { posts, page, postPerPage, allPosts, searchValues } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
    const filteredPosts = !!searchValues
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValues.toLowerCase());
        })
      : posts;
    return (
      <section className="container">
        <TextInput
          searchValues={searchValues}
          handleChange={this.handleChange}
        />
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
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
