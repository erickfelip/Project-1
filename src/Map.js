import "./App.css";
import { Component } from "react";
import { fetchPostsAndPhotos } from "./utils/loadPosts";
import { Posts } from "./components/Posts";

class Map extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await fetchPostsAndPhotos();
    this.setState({ posts: postsAndPhotos });
  };
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default Map;
