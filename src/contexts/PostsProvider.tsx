import React, { createContext, useContext, useState } from "react";
import { fetchData } from "../services/api";

export interface Post {
  id: number;
  imageUrl: string;
  profilePictureUrl: string;
}

interface PostsContextProps {
  posts: Post[];
  addPost: () => void;
}

interface PostsProviderProps {
  children: React.ReactNode;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = () => {
    try {
      const timestamp = Date.now();

      const imageUrl = `https://source.unsplash.com/1600x1000/?vegan&${timestamp}`;
      const profilePictureUrl = `https://source.unsplash.com/300x300/?man&${timestamp}`;

      const newPost: Post = {
        id: posts.length + 1,
        imageUrl: imageUrl,
        profilePictureUrl: profilePictureUrl,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
    } catch (error) {
      console.error("Error while fecthing post details !!!");
    }
  };

  const contextValue = { posts, addPost };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

const usePosts = () => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("usePosts must be used within an PostsProvider");
  }

  return context;
};

export { PostsProvider, usePosts };
