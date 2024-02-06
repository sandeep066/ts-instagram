import React from "react";
import "./styles/insta-container.scss";
import "./styles/insta-stories-posts-all.scss";
import "./styles/insta-stories-profile.scss";
import "./styles/insta-posts-sidebar.scss";
import "./styles/global.scss";
import { InstagramProvider } from "./contexts/InstagramProvider";
import Instagram from "./containers/feed/Feed";
import NavBar from "./containers/navbar/NavBar";
import Stories from "./containers/stories/Stories";
import UserProfile from "./containers/userprofile/UserProfile";
//import Feed from "./containers/feed/Feed";
import Posts from "./containers/posts/Posts";
import Suggestions from "./containers/suggestions/Suggestions";

const App: React.FC = () => {
  return (
    <div className="insta-container">
      <NavBar />
      <div className="insta-stories-posts-all">
        <div className="insta-stories-profile">
          <Stories />
          <UserProfile />
        </div>
        <div className="insta-posts-sidebar">
          <Posts />
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default App;
