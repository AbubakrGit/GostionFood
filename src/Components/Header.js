import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Header extends Component {

  constructor(props){
    super(props);

    
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 700,
      cssEase: "linear"
    }
    
    return (
        <>

        <header>

          <img className='header__img' src='../images/header.jpg'></img>

          <div className="header__name">
            <a href="../index.html">
              <h1>Продукция собственного <br></br>
              производства <span> с доставкой</span></h1>
            </a>
          

          <div className="header__imagee">

            <img src='../images__icon/taymer.svg'></img>
            <span>до 60 минут</span>

          </div>

          </div>


          <div className="header__slider4">
            <div className='header__slider'>
                  <h4>Популярные блюда</h4>
            </div>

            <Slider {...settings}>
          <div className='carousel__slider'>
            <img src='../images__menu__2/carousel1.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Холодец из говядины</h5>
                <h6>130/30г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel2.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Севиче из тунца</h5>
                <h6>110г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel3.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Сельдь с картофелем</h5>
                <h6>100/50г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel4.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Грузди соленые</h5>
                <h6>100/50г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel1.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Холодец из говядины</h5>
                <h6>130/30г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel2.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Севиче из тунца</h5>
                <h6>110г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel3.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Сельдь с картофелем</h5>
                <h6>100/50г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
          <div className='carousel__slider'>
          <img src='../images__menu__2/carousel4.svg'></img>
            <div className='slider__main'>

              <div className='left'>
                <h5>Грузди соленые</h5>
                <h6>100/50г</h6>
                <p>800₽</p>

              </div>

              <div className='right'>
                <button><a href=''>+</a></button>
              </div>

            </div>
          </div>
        </Slider>

          </div>

        </header>
      
        </>
    )
  }
}
