import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Videos.css";
import VideoSidebar from "./VideoSidebar";

function Videos(props) {
  const [isplaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const handleVideoPress = () => {
    //if video is playing ->stop
    if (isplaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    //if not playing ->play
    else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  // videoRef.current.play();
  return (
    <div className="video">
      <video
        autoPlay
        className="video_player"
        src={props.videoUrl}
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>

      <VideoFooter
        profileName={props.profileName}
        profilePic={props.profilePic}
        caption={props.caption}
        songName={props.songName}
        songPic={props.songPic}
      />

      <VideoSidebar
        likes={props.likes}
        shares={props.shares}
        comments={props.comments}
      />
    </div>
  );
}

export default Videos;
