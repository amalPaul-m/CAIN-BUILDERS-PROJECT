import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./youtubeVideo.css";

function AllYoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID;

    async function fetchVideos() {
      try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=20&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setVideos(data.items || []);
      } catch (e) {
        console.error("Error fetching videos:", e);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="video-section">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3} 
        loop={false}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1 },  
          640: { slidesPerView: 2, slidesPerGroup: 2 },  
          1024: { slidesPerView: 3, slidesPerGroup: 3 },  
        }}
        className="manual-slider"
      >
        {videos.map((v) => (
          <SwiperSlide key={v.contentDetails.videoId}>
            <div className="video-card">
              <iframe
                className="video-frame"
                src={`https://www.youtube.com/embed/${v.contentDetails.videoId}?autoplay=1&mute=1&loop=1`}
                title={v.snippet.title}
                allowFullScreen
              ></iframe>
              <p className="video-title">{v.snippet.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AllYoutubeVideos;
