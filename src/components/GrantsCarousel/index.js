import React, {Component} from "react";
import M from "materialize-css";
import Carousel3 from "../../pictures/town3.jpg"

export default class Carousel extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
        });
    }
    
    render(){
        return (
            <div className="carousel carousel-slider">
                {/* <a className="carousel-item" href="#one!"s><img src={Carousel1} alt="Image1" /></a> */}
                {/* <a className="carousel-item" href="#two!"><img src={Carousel2} alt="Image2" /></a> */}
                <a className="carousel-item" href="#three!"><img src={Carousel3} alt="Image3" /></a>
                {/* <a className="carousel-item" href="#four!"><img src={Carousel4} alt="Image4" /></a> */}
            </div>
        );
    }
}