import React from "react";
import img1 from "../../../image/1.jpg";
import img2 from "../../../image/2.jpg";
import img3 from "../../../image/3.jpg";

function Carousel() {
    return (
        <div className="d-flex justify-content-center my-5">
            <div id="carouselExampleControls" className="carousel slide custom-carousel">
                <div className="carousel-inner rounded shadow">
                    <div className="carousel-item active">
                        <img src={img2} className="d-block w-100 carousel-img" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100 carousel-img" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carousel-img" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;