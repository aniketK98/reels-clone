import React from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoSidebar({likes , shares, comments}) {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="video_sidebar">
      <div className="video_sidebar_button">
        {liked ? <FavoriteIcon sx={{ fontSize: 30,color: "red" }} onClick={(e)=>(setLiked((prevLiked =>(!prevLiked))))}/> : <FavoriteBorderIcon sx={{ fontSize: 30 }} onClick={(e)=>(setLiked((prevLiked =>(!prevLiked))))}/>}
        
        <p>{liked ?likes+1 :  likes}</p>
      </div>
      <div className="video_sidebar_button">
        <MessageIcon sx={{ fontSize: 30 }} />
        <p>{comments}</p>
      </div>
      <div className="video_sidebar_button">
        <SendIcon sx={{ fontSize: 24 }} className="share" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
