import React from "react";
import { InstagramProvider } from "./contexts/InstagramProvider";
import Instagram from "./containers/feed/Feed";

const App: React.FC = () => {
  return (
    <InstagramProvider>
      <Instagram />
    </InstagramProvider>
  );
};

export default App;
