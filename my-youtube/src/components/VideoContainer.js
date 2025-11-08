import { useEffect, useState } from "react";
import { YOUTUBE_VIDOES_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDOES_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    // Fetch videos from YouTube API when the component mounts
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCard info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  );
};

export default VideoContainer;
