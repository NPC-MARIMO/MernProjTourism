import React from 'react'
import './festival.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Festival() {


  useGSAP(()=>{

    let tl = gsap.timeline({scrollTrigger : {
      trigger : ".festival",
      start : "top top",
      pin : true,
      pinSpacing : true,
      scrub : 1,

    }});


    tl.to(".festival",{
      backgroundColor : "#000"
    }).from(".word",{
      y : "100% ",
      stagger : 0.1  
    }).from(".h1s h1",{
      y : "100%"
    }).from(".festival .images img",{
      y : "100%"
    }).from("p",{
      y : "100%"
    }).to(".h1s h1",{
      y : "-100%"
    }).to(".festival .images img",{
      y : "-100%"
    }).to("p",{
      y : "-100%"
    }).to(".h1s h1",{
      y : "-200%"
    }).to(".festival .images img",{
      y : "-200%"
    }).to("p",{
      y : "-200%"
    }).to(".h1s h1",{
      y : "-300%"
    }).to(".festival .images img",{
      y : "-300%"
    }).to("p",{
      y : "-300%"
    }).to(".h1s h1",{
      y : "-400%"
    }).to(".festival .images img",{
      y : "-400%"
    }).to("p",{
      y : "-400%"
    }).to('.word',{
      y : "-100%",
      stagger : .1
    })
    
  })


  let heading = "Our Most Famous Festivals";
  let words = heading.split(" ");

 

  return (


    <div>
        <div className="festival">
          <h1>
            {
              words.map((word)=>{
                return(
                  <span className='word' >{word} </span>
                )
              })
            }
          </h1>

          <div className="fes">

            <div className="images">
              <img src="https://t4.ftcdn.net/jpg/05/60/58/67/360_F_560586710_VmIHNuH6TcdLHIn3cEuIDDAcCYBhkIL0.jpg " alt="" />
              <img src="https://img.jagranjosh.com/images/2022/October/13102022/compress_diwali_2022_reasons.webp" alt="" />
              <img src="https://www.jagranimages.com/images/newimg/17082022/17_08_2022-dahi-handi_22986408.jpg" alt="" />
              <img src="https://media.telanganatoday.com/wp-content/uploads/2021/03/shivratri.jpg" alt="" />
            </div>
            <div className="h1s">
              <h1>Holi</h1>
              <h1>Diwali</h1>
              <h1>Janamashtami</h1>
              <h1>MahaShivratri</h1>
            </div>
            <div className="ps">
              <p>Festival of Colors</p>
              <p>Festival of Lights</p>
              <p>The Birth of Lord Krishna</p>
              <p>The Great Night of Lord Shiva</p>
            </div>
            

          </div>
         

        </div>
    </div>
  )
}
