import React from "react";
import "./styles.css";

export const PostCard = ({ post }) => {
  const handleTeste = () => {
    console.log("teste post card");
  };

  return (
    <div className="post" onClick={handleTeste}>
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
