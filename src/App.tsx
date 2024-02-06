import React from "react";
import { InstagramProvider } from "./contexts/InstagramProvider";
import Instagram from "./containers/feed/Instagram";

const App: React.FC = () => {
  return (
    <InstagramProvider>
      <Instagram />
    </InstagramProvider>
  );
};

export default App;
