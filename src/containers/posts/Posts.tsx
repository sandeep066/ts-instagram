import React from "react";
import "./posts.scss";
import { usePosts } from "../../contexts/PostsProvider";
import PostItem from "../../components/post/PostItem";

const Posts = () => {
  const { posts, addPost } = usePosts();
  return (
    <div className="main-posts">
      <button onClick={addPost}>Add Post</button>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
