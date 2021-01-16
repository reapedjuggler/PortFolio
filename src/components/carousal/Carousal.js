import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/img/carousal/slide5.jpg';
import slide2 from '../../assets/img/carousal/slide2.webp';
import slide3 from '../../assets/img/carousal/slide3.webp';
import Scroll from '../scroll/Scroll';
import './carouselCss.css'; // to make it responsive 

function Carousal() {
    return (
        <React.Fragment>
            <div id = "home">
                <Carousel controls = {false} indicators interval = {2000} pauseOnHover = {false}>
                    <Carousel.Item>
                       
                        <img
                            className="d-blo ck w-100 custom-img"
                            src = {slide1}
                            alt = "First slide"
                        />

                    </Carousel.Item>
                    
                    <Carousel.Item>
                     
                        <img
                            className="d-block w-100 custom-img"
                            src = {slide2}
                            alt = "Second slide"
                        />

                    </Carousel.Item>
                    
                    <Carousel.Item>

                        <img
                            className = "d-block w-100 custom-img"
                            src = {slide3}
                            alt = "Third slide"
                        />
                        
                    </Carousel.Item>
                
                </Carousel>
            </div>
            <Scroll />
        </React.Fragment>
    );
};

export default Carousal;
