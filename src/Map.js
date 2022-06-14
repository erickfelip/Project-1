import "./App.css";
import { Component } from "react";
import { PostCard } from "./components/PostCard";
import { fetchPostsAndPhotos } from "./utils/loadPosts";

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
    return <section className="container">
      
    </section>;
  }
}

export default Map;
