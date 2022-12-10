import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ profileName, profilePic, caption, songName, songPic }) {
  return (
    <div className="video_footer">
      <div className="video_footer_text">
        <div className="profile">
          <img
            // src={"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg"}
            src={profilePic}
            className="profile_pic"
            alt="album art"
          />
          <h4>{profileName}</h4>
        </div>
        <p>{caption}</p>
        <div className="video_footer_ticker">
          <MusicNoteIcon
            fontSize="small"
            className="video_footer_ticker_icon"
          />
          <p className="ticker">{songName}</p>
          {/* <Ticker mode="await" className="ticker">
            {({ index }) => (
              <>
                <p>{songName}</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <div className="roller">
        <img
          // src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4bb82b72535211.5bead62fe26d5.jpg"
          src={songPic}
          alt="album art"
        />
      </div>
    </div>
  );
}

export default VideoFooter;
