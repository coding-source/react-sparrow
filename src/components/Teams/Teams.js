import React from 'react'
import ImageSlider from "../Teams/Slider"
import "../../css/App.css"
function Teams() {
    return (
        <div className="container mt-5 carousel">
        <h1 className="slider_title">our team!!</h1>
        <ImageSlider />
      </div>
    );
}

export default Teams
