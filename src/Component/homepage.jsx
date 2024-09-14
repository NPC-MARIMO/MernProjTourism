import React from 'react'
import "./homepage.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {

  let name = 'TEVOurism.';
  let words = name.split('');

  useGSAP(()=>{


    gsap.from('.moveToTop',{
      scale : 0,
      scrollTrigger : {
        trigger : ".homePage",
        scrub : 1,
        start : 'bottom 99%',
        end : "top 75%"
      }
    })



    let tl = gsap.timeline({repeat:-1})

    tl.from('.heading1 h1',{
      y : "100%"
    },'a').from('.heading2 h1',{
      y : "100%",
      delay : .1
    },'a').to('.heading1 h1',{
      delay : 2,
      y : "-100%"
    },'b').to('.heading2 h1',{
      y : "-100%",
      delay : 2.1
    },'b').to('.heading1 h1',{
      delay : 2,
      y : "-200%"
    },'c').to('.heading2 h1',{
      y : "-200%",
      delay : 2.1
    },'c').to('.heading1 h1',{
      delay : 2,
      y : "-300%"
    },'d').to('.heading2 h1',{
      y : "-300%",
      delay : 2.1
    },'d')



    gsap.to(".siteLetter",{
      x : "80%",
      scrollTrigger :{
        trigger : ".homePage",
        start : "bottom 80%",
        scrub : 1,
        end : "bottom center"
      }
    })

  })





  return (
    <div>
      <div className="homePage" id='home' >
        <div className="h1">
          <div className="heading1">
            <h1>It Starts With</h1>
            <h1>Then It becomes </h1>
            <h1>and Finally</h1>
          </div>
        </div>  
        <div className="h2">
          <div className="heading2">
            <h1>Exploring India</h1>
            <h1>Visualising India</h1>
            <h1>Over-Joying India</h1>
          </div>
        </div>

      </div>


     <div className="name">
     {words.map((word)=>{
        return (
         <h1 className='siteH1Letters' ><span className="siteLetter">
         {word}
        </span></h1>
        )
      })}
     </div>

     <div  className="moveButton" onMouseOut={()=>{
       gsap.to('.moveToTop',{
         x : 0,
         y : 0
       })
     }} onMouseMove={(dets)=>{
        gsap.to('.moveToTop',{
          x :( dets.clientX -1415)/3,
          y : (dets.clientY-675 )/3
        })
}} >

     <div className="moveToTop">
      <button onClick={()=>{
        document.documentElement.scrollTop = 0;
      }} >
        <img src="data:image/jpeg;base64,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" alt="" /></button>
     </div>

     </div>


    </div>
  )
}
