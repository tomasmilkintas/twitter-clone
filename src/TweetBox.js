import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Tommy",
            username: "cleverTommy",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg",
        });

        setTweetImage("");
        setTweetMessage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="data:image/png;base64,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" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What is happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Enter an image URL"
                    type="text"
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
