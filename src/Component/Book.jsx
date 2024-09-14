import React from 'react'
import "./Book.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/img1.jpg"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Book(props) {


    useGSAP(() => {

      
        gsap.to('.in', {
            rotate: 360,
            duration: 25,
            repeat: -1,
            ease:"none"
        })



        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".bookingSection0",

                scrub: 1,
                end: "top 15%"
            }
        });
        tl.from(".bookingSection0 .image", {
            rotate: 20,
            y: 200
        }, 'a').from(".location0 h1", {
            rotate: -15,
            y: 300
        }, 'a')

        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".bookingSection1",
                scrub: 1,
                end: "top 15%"
            }
        });
        tl1.from(".bookingSection1 .image", {
            rotate: 20,
            y: 200
        }, 'a').from(".location1 h1", {
            rotate: -15,
            y: 300
        }, 'a')
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".bookingSection2",

                scrub: 1,
                end: "top 15%"
            }
        });
        tl2.from(".bookingSection2 .image", {
            rotate: 20,
            y: 200
        }, 'a').from(".location2 h1", {
            rotate: -15,
            y: 300
        }, 'a')
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".bookingSection3",

                scrub: 1,
                end: "top 15%"
            }
        });
        tl3.from("bookingSection3 .image", {
            rotate: 20,
            y: 200
        }, 'a').from(".location3 h1", {
            rotate: -15,
            y: 300
        }, 'a')
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".bookingSection4",

                scrub: 1,
                end: "top 15%"
            }
        });
        tl4.from(".bookingSection4 .image", {
            rotate: 20,
            y: 200
        }, 'a').from(".location4 h1", {
            rotate: -15,
            y: 300
        }, 'a')
        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".bookingSection5",

                scrub: 1,
                end: "top 15%"
            }
        });
        tl5.from(".bookingSection5 .image", {
            rotate: 20,
            y: 200
        }, 'a').from(".location5 h1", {
            rotate: -15,
            y: 300
        }, 'a')

    })


    return (
        <>
            <div className="bookingSection0 bookingSection">

                <div className="in" onMouseEnter={() => {
                    gsap.to(".in", {
                        backgroundColor: "#0A0A97",
                        border: "none",
                        cursor : "none",
                    })
                    gsap.to(".in h2", {
                        scale: 1.3
                    })
                }} onMouseOut={() => {
                    gsap.to(".in", {
                        border: "2px dashed blue",
                        backgroundColor: "transparent",
                    })
                    gsap.to(".in h2", {
                        scale: 2
                    })
                }} >
                    <h2>New Delhi</h2>
                </div>

                <div className="location0 location  ">
                    <h1 className='inner' >INDIA GATE</h1>
                    <h1 className='outer'>INDIA GATE</h1>

                </div>
                <div className="image" onMouseMove={(dets) => {

                    gsap.to('.circle', {
                        scale: 1,
                        x: dets.clientX - 120,
                        y: dets.clientY - 270
                    })

                }} onMouseOut={() => {
                    gsap.to('.circle', {
                        scale: 0
                    })
                }} >
                    <div className="circle">
                        <h2>Book Now</h2>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className="number">
                    <h1>01</h1>
                </div>
            </div>
            <div className="bookingSection5 bookingSection">
            <div className="in" onMouseEnter={() => {
                    gsap.to(".in", {
                        cursor : "none",
                        backgroundColor: "#0A0A97",
                        border: "none"
                    })
                    gsap.to(".in h2", {
                        scale: 1.3
                    })
                }} onMouseOut={() => {
                    gsap.to(".in", {
                        border: "2px dashed blue",
                        backgroundColor: "transparent",
                    })
                    gsap.to(".in h2", {
                        scale: 2
                    })
                }} >
                    <h2>Jammu kashmir </h2>
                </div>
                <div className="location5 location  ">
                    <h1 className='inner' >Ladakh</h1>
                    <h1 className='outer'>Ladakh</h1>
                </div>
                <div className="image" onMouseMove={(dets) => {

                    gsap.to('.circle', {
                        scale: 1,
                        x: dets.clientX - 120,
                        y: dets.clientY - 270
                    })

                }} onMouseOut={() => {
                    gsap.to('.circle', {
                        scale: 0
                    })
                }} >
                    <div className="circle">
                        <h2>Book Now</h2>
                    </div>
                    <img src="https://assets.cntraveller.in/photos/6138b4d7b608619ba75f717e/16:9/w_960,c_limit/Ladakh-lead.jpg" alt="" />
                </div>
                <div className="number">
                    <h1>02</h1>
                </div>
            </div>
            <div className="bookingSection2 bookingSection">
            <div className="in" onMouseEnter={() => {
                    gsap.to(".in", {
                        backgroundColor: "#0A0A97",
                        border: "none"
                    })
                    gsap.to(".in h2", {
                        scale: 1.3
                    })
                }} onMouseOut={() => {
                    gsap.to(".in", {
                        cursor : "none",
                        border: "2px dashed blue",
                        backgroundColor: "transparent",
                    })
                    gsap.to(".in h2", {
                        scale: 2
                    })
                }} >
                    <h2>M. P.</h2>
                </div>
                <div className="location2 location  ">
                    <h1 className='inner' >Chattarpur</h1>
                    <h1 className='outer'>Chattarpur</h1>
                </div>
                <div className="image" onMouseMove={(dets) => {

                    gsap.to('.circle', {
                        scale: 1,
                        x: dets.clientX - 120,
                        y: dets.clientY - 270
                    })

                }} onMouseOut={() => {
                    gsap.to('.circle', {
                        scale: 0
                    })
                }} >
                    <div className="circle">
                        <h2>Book Now</h2>
                    </div>
                    <img src="https://c.myholidays.com/blog/blog/content/images/2021/04/Madurai.webp" alt="" />
                </div>
                <div className="number">
                    <h1>03</h1>
                </div>
            </div>
            <div className="bookingSection3 bookingSection" >
            <div className="in" onMouseEnter={() => {
                    gsap.to(".in", {
                        cursor : "none",
                        backgroundColor: "#0A0A97",
                        border: "none"
                    })
                    gsap.to(".in h2", {
                        scale: 1.3
                    })
                }} onMouseOut={() => {
                    gsap.to(".in", {
                        border: "2px dashed blue",
                        backgroundColor: "transparent",
                    })
                    gsap.to(".in h2", {
                        scale: 2
                    })
                }} >
                    <h2>Agra</h2>
                </div>
                <div className="location3 location  ">
                    <h1 className='inner' >Taj mahal</h1>
                    <h1 className='outer'>Taj mahal</h1>
                </div>
                <div className="image" onMouseMove={(dets) => {

                    gsap.to('.circle', {
                        scale: 1,
                        x: dets.clientX - 120,
                        y: dets.clientY - 270
                    })

                }} onMouseOut={() => {
                    gsap.to('.circle', {
                        scale: 0
                    })
                }} >
                    <div className="circle">
                        <h2>Book Now</h2>
                    </div>
                    <img src="https://i.natgeofe.com/n/a95542a2-c8e3-4817-91a9-ba9d89cec383/00000161-7323-d279-ad6f-f7ff7a2a0000.jpg?wp=1&w=1600&h=900" alt="" />
                </div>
                <div className="number">
                    <h1>04</h1>
                </div>
            </div>
            <div className="bookingSection4 bookingSection">
            <div className="in" onMouseEnter={() => {
                    gsap.to(".in", {
                        cursor : "none",
                        backgroundColor: "#0A0A97",
                        border: "none"
                    })
                    gsap.to(".in h2", {
                        scale: 1.3
                    })
                }} onMouseOut={() => {
                    gsap.to(".in", {
                        border: "2px dashed blue",
                        backgroundColor: "transparent",
                    })
                    gsap.to(".in h2", {
                        scale: 2
                    })
                }} >
                    <h2>Vrindavan</h2>
                </div>
                <div className="location4 location  ">
                    <h1 className='inner' >Prem mandir</h1>
                    <h1 className='outer'>Prem mandir</h1>
                </div>
                <div className="image" onMouseMove={(dets) => {

                    gsap.to('.circle', {
                        scale: 1,
                        x: dets.clientX - 120,
                        y: dets.clientY - 270
                    })

                }} onMouseOut={() => {
                    gsap.to('.circle', {
                        scale: 0
                    })
                }} >
                    <div className="circle">
                        <h2>Book Now</h2>
                    </div>
                    <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/05095206/Top-15-tourist-places-in-northern-India-09.jpg" alt="" />
                </div>
                <div className="number">
                    <h1>05</h1>
                </div>
            </div>
        </>
    )
}
