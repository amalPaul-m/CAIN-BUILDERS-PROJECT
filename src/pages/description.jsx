import React from "react";
import Leaf1 from "../assets/leaf1.png";
import FacebookPhotos from "../components/facebookPhotos.jsx"

const Description = () => {
    return (
        <div>
            <div className="section" id="description">
            <div className="content-fit">
                <div className="number">02</div>
                <div className="des">
                <div className="title">PORTFOLIO</div>
                <p>
                The 'go to solution' for residential and commercial 
                projects. Everything from planning to completion will 
                be done by our expert staff. 
                </p>
                </div>
            </div>
            <img
                src={Leaf1}
                className="decorate"
                alt="leaf"
                style={{width: 5, bottom: 0, right: 0}}
            />
            </div>
            <div className="image-container">
                <FacebookPhotos />
            </div>
        </div>
    );
}
export default Description;