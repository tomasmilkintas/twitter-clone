import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubble from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Tom M{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/kEVjjnOEmDCTm6alkt/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubble fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
