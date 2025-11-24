import React from "react";
import YoutubeContent from "../components/youtubeVideo.jsx";

const ThirdPage = () => {
    return (
        <div>   
           <div className="section" id="intro">
            <div className="content-fit">
                <div className="number">03</div>
                <div className="des">
                <div className="title">Completed Projects</div>
                <p>
                Manages each project from planning stage to 
                completion to ensure the smooth transition 
                between appraisal, planning, execution and closure. 
                Let experts make your dream a reality. 
                </p>
                </div>
            </div>
            </div>
            <div className="video-container">
                <YoutubeContent />
            </div>
            
        </div>
    );
}
export default ThirdPage;