import React, { createContext, useContext, useState } from "react";
import { fetchData } from "../services/api";

export interface Post {
  id: number;
  imageUrl: string;
  profilePictureUrl: string;
}

interface InstagramContextProps {
  posts: Post[];
  addPost: () => void;
}

interface InstagramProviderProps {
  children: React.ReactNode;
}

const InstagramContext = createContext<InstagramContextProps | undefined>(
  undefined
);

const InstagramProvider: React.FC<InstagramProviderProps> = ({ children }) => {
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
    <InstagramContext.Provider value={contextValue}>
      {children}
    </InstagramContext.Provider>
  );
};

const useInstagram = () => {
  const context = useContext(InstagramContext);

  if (!context) {
    throw new Error("useInstagram must be used within an InstagramProvider");
  }

  return context;
};

export { InstagramProvider, useInstagram };
