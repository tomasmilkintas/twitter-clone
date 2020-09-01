import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="realDonaldTrump"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    );
}

export default Widgets;
