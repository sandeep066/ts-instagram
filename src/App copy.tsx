import React from "react";
import { PostsProvider } from "./contexts/PostsProvider";
import Posts from "./containers/feed/Feed";

const App: React.FC = () => {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
};

export default App;
