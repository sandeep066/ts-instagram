import React from "react";
import HeartIcon from "./HeartIcon";
import ChatIcon from "./ChatIcon";
import SendIcon from "./SendIcon";
import BookmarkIcon from "./BookmarkIcon";

interface PostFeedIconsProps {
  className?: string;
}

const PostFeedIcons: React.FC<PostFeedIconsProps> = ({ className }) => (
  <div className={`${className || ""}`}>
    <HeartIcon />
    <ChatIcon />
    <SendIcon />
    <BookmarkIcon />
  </div>
);

export default PostFeedIcons;
