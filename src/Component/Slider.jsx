import { Carousel } from "antd";
import React from "react";
const contentStyle = {
    marginTop: "40px",
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};
const Carusel = () => (
    <div className='container'>
        {" "}
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>
                    <img
                        style={{ height: "100%", width: "100%" }}
                        src='./img/slider.jpeg'
                        alt='snekers'
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        style={{ height: "100%", width: "100%" }}
                        src='./img/slider2.jpeg'
                        alt='snekers'
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        style={{ height: "100%", width: "100%" }}
                        src='./img/slider3.jpeg'
                        alt='snekers'
                    />
                </h3>
            </div>
        </Carousel>
    </div>
);
export default Carusel;
