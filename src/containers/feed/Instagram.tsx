import React from "react";
import { useInstagram } from "../../contexts/InstagramProvider";
import PostItem from "../../components/post/PostItem";

const Instagram: React.FC = () => {
  const { posts, addPost } = useInstagram();

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Instagram;
