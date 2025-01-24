import React from "react";
import Slider from "react-slick";
import Select from 'react-select'
import "../styles/main.scss";
import blacklogo from "../assets/blacklogo.png";

import user from "../assets/user.png";

import Outlaws from "../assets/c1.png";
import RariEagle from "../assets/c2.png";
import Rockat from "../assets/c3.png";
import Explorer from "../assets/c4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const options = [
  { value: 'Lauchpad', label: 'Lauchpad' },
  { value: 'Lauchpad 2', label: 'Lauchpad 2' },
  { value: 'Lauchpad 3', label: 'Lauchpad 3' },
  { value: 'Lauchpad 4', label: 'Lauchpad 4' },
  { value: 'Lauchpad 5', label: 'Lauchpad 5' }
]
export default function Home() {
  var settings = {
    dots: false,
    fade: false,
    autoplay: false,
    infinite: true,
   padding: '60px',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mainbg">
      <header>
        <div className="container">
            <div className="logo">
              <img alt="" src={blacklogo} />
            </div>
          
            <div className="rightbtnwrap">
            <a href="#" className="btn">
            Collectıon
              </a>
              <a href="#" className="btn">
              Explore
              </a>
              <a href="#" className="btn">
              Mint NFT
              </a>

             
              
        
              <a href="#" className="profile">
                <img alt="" src={user} />
              </a>
            </div>
            </div>
          </header>
       <section className="herosection">
<div className="container">
  <div className="contentsec">
    <h3>Fuel Ur Creativity</h3>
    <p>Unleash your imagination & explore a new frontier of art, ownership, and self-expression</p>
    <a href="#" className="btn">
    Explore Collectıon <span class="material-symbols-outlined">
trending_flat
</span>
              </a>
  </div>
</div>
       </section>
       <section className="homeslider">
        <div className="container">
          <div className="title">
            <h3>Collections</h3>
            <div className="bdr"></div>
            <div style={{width:'150px'}}></div>
          </div>
        <Slider {...settings} >
         
         <a href="#" className="slide ">
           <div className="inside">
            <div className="imgdiv">
         <img alt="" src={Outlaws} />
         </div>
         
         </div>
         <h3 className="collecbutton">Outlaws</h3>
         </a>
         <a href="#" className="slide ">
           <div className="inside">
            <div className="imgdiv">
         <img alt="" src={RariEagle} />
         </div>
         
         </div>
         <h3 className="collecbutton">RariEagle</h3>
         </a>
         <a href="#" className="slide ">
           <div className="inside">
            <div className="imgdiv">
         <img alt="" src={Rockat} />
         </div>
         
         </div>
         <h3 className="collecbutton">Rockat</h3>
         </a>
         <a href="#" className="slide ">
           <div className="inside">
            <div className="imgdiv">
         <img alt="" src={Explorer} />
         </div>
         
         </div>
         <h3 className="collecbutton">Explorer</h3>
         </a>
        
       </Slider>
        </div>
       </section>
     
    <div className="morebtnwrap">
     
                <a href="#" className="btn">
                Check More Collections<span class="material-symbols-outlined">
trending_flat
</span>
              </a>
      </div>
     
      </div>
  
    </>
  );
}
