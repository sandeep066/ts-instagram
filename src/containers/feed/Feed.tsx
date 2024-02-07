import React from "react";
import { usePosts } from "../../contexts/PostsProvider";
import PostItem from "../../components/post/PostItem";

const Feed: React.FC = () => {
  const { posts, addPost } = usePosts();

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
