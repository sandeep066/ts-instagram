/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Post } from "../../contexts/InstagramProvider";
import "./post-style.css";
import PostFeedIcons from "../../assets/icons/PostFeedIcons";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post-container">
      <div className="feeds">
        <div className="feed">
          <div className="post-profile">
            <img
              className="post-profile-picture"
              src={post.profilePictureUrl}
              alt="Profile picture"
            />
            <div className="post-user-names">
              <h4 className="post-name">Sandeep Hullatti</h4>
              <p className="post-user">@iamsandeep</p>
            </div>
          </div>

          <img className="post-picture" src={post.imageUrl} alt="Post" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            tenetur quia cum libero, architecto repellendus explicabo!
          </p>
          <PostFeedIcons className="icons" />
        </div>

        {/* Like, Comment, Share icons */}
        <div>
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
