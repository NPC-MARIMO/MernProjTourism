import React from 'react'
import "./Crispy.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from 'gsap/gsap-core';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Crispy() {
    

    let text = "We Provide Best Guides , Best Services & Best Knowledge At Best Price."
    let Words = text.split(" ");

    useGSAP(()=>{

        let tl = gsap.timeline({scrollTrigger : {
            trigger : ".crispy",
            start : "center center",
            pin : true,
            pinSpacing : true,
            scrub : 1,
            end : "top -200%"
        }})
        tl.from(".crispy .bgH1 ",{
            opacity : 0,
            delay : .5
        },'a').to('.crispy',{
            backgroundColor : "#000"
        },'a').from(".crispy .container h1.inner",{
            y : "100%",
            ease : "back.inOut",
            stagger : 0.1,
            
        }).to(".crispy",{
            backgroundColor : "#fff",
            color : "#000"
        })
    })



  return (
    <div>
        <div className="crispy">

            <div className="bgH1">
                <h1>Why Us</h1>
            </div>

            <div className="container">
                {
                    Words.map((Word)=>{
                        return (
                            <h1 className='outer'><h1 className="inner">{Word}</h1></h1>
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}
