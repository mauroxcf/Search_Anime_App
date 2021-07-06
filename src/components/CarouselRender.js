import React, { Component } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class CarouselRender extends Component {
  render() {
    const handleMessage = (score) => {
      if (score >= 0 && score <= 4) return "I do not recommend it."
      else if (score > 4 && score < 8) return "You may have fun."
      else return "Great, this is one of the best anime."
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (<div>
          <Slider {...settings}>
            {this.props.data.map(val => (
              <div key={val.mal_id} className="card m-1">
                <h2 className="title my-2">{val.title}</h2>
                <img className="image_size rounded" onClick={() => window.open(val.url, "anime url")} alt="Anime IMG" src={val.image_url} />
                <p className="score">Rating: {val.score}</p>
                <p>{handleMessage(val.score)}</p>
              </div>
            ))
            }
          </Slider>
        </div>
    )
  }
}
