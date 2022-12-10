import "./App.css";
import React from "react";
import Videos from "./Components/Videos";
import axiosInstance from "./Axios.js";

function App() {
  const [videoData, setVideoData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const req = await axiosInstance.get("/videos");
      setVideoData(req.data);
    }
    fetchData();
  }, []);
  console.log(videoData);
  return (
    <div className="app">
      <div className="app_videos">
        {videoData.map((data) => (
          <Videos
            videoUrl={data.videoUrl}
            profileName={data.profileName}
            profilePic={data.profilePic}
            caption={data.caption}
            songName={data.songName}
            songPic={data.songPic}
            likes={data.likes}
            shares={data.shares}
            comments={data.comments}
            key={data.__id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
