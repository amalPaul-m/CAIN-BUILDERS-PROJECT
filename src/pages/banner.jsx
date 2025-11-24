import React,{useState} from "react";
import Leaf1 from "../assets/leaf1.png";
import '../pages/banner.css';

const Banner = () => {

    const [color,setColor]=useState("#d1ff48");

    const handleClick=()=>{
        color==="#d1ff48"?setColor("#ebfc00ff") : setColor("#d1ff48");
    }

    return (
        <div>
            <div className="section" id="banner">
            <div className="content-fit">
            <div className="title" onMouseEnter={handleClick} onMouseLeave={handleClick} style={{color:color}} >CAIN BUILDERS</div> {/*data-before="CAIN BUILDERS"*/}
            <h1 className="caption-text">Adorning Your Outer World</h1>
            </div>
            <div className="image-wrapper">
            <img
                src={Leaf1}
                className="decorate soft-shake leaf1-img"
                alt="flower"               
            />
            </div>
            </div>
        </div>
    );
}
export default Banner;