import "./App.css";
import { Component } from "react";

class Map extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Teste 1",
        description: "testando 1",
      },
      {
        id: 2,
        title: "Teste 2",
        description: "testando 2",
      },
      {
        id: 3,
        title: "Teste 3",
        description: "testando 3",
      },
    ],
  };
  timeoutUpdate = null;
  //useEffect
  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout() {
    const { posts, counter } = this.state;
    posts[0].title = "Outro Título";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Map;
