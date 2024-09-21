import React, { useEffect, useRef } from 'react'
import './Book2.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Book2() {

    let p1 = "A Hindu temple and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture"
    let p1Letter = p1.split("")

    useGSAP(() => {
        gsap.from(".book2>h1", {
            duration: .5,
            y: "100%",
            opacity: 0
        })
    })




    return (
        <>
            <div className="book2">

                <h1>Our Best Destinations</h1>

                <div className='comp' >
                    <div className="left">
                        <div className="h1">
                            <h1>Swaminarayan Akshardham</h1>

                        </div>
                        <div className="p">
                            <p>{p1Letter.map((letter) => {
                                return <span>{letter}</span>
                            })}</p>


                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src="https://edge.ixigo.com/ixi-api/img/515ad58be4b05d932364322d_600x315.jpg" alt="" />
                        </div>

                        <div className="button" onMouseMove={(dets) => {
                            gsap.to('.button button', {
                                x: (dets.clientX - 600) / 5,
                                y: (dets.clientY - 550) / 3
                            })
                        }} onMouseOut={() => {
                            gsap.to('.button button', {
                                x: 0,
                                y: 0
                            })
                        }} ><button>Book Now</button></div>
                    </div>
                </div>

                <div className='comp' >
                    <div className="left">
                        <div className="h1">
                            <h1>Swaminarayan Akshardham</h1>

                        </div>
                        <div className="p">
                            <p>{p1Letter.map((letter) => {
                                return <span>{letter}</span>
                            })}</p>


                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src="https://edge.ixigo.com/ixi-api/img/515ad58be4b05d932364322d_600x315.jpg" alt="" />
                        </div>

                        <div className="button" onMouseMove={(dets) => {
                            gsap.to('.button button', {
                                x: (dets.clientX - 600) / 5,
                                y: (dets.clientY - 550) / 3
                            })
                        }} onMouseOut={() => {
                            gsap.to('.button button', {
                                x: 0,
                                y: 0
                            })
                        }} ><button>Book Now</button></div>
                    </div>
                </div>

                <div className='comp' >
                    <div className="left">
                        <div className="h1">
                            <h1>Swaminarayan Akshardham</h1>

                        </div>
                        <div className="p">
                            <p>{p1Letter.map((letter) => {
                                return <span>{letter}</span>
                            })}</p>


                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src="https://edge.ixigo.com/ixi-api/img/515ad58be4b05d932364322d_600x315.jpg" alt="" />
                        </div>

                        <div className="button" onMouseMove={(dets) => {
                            gsap.to('.button button', {
                                x: (dets.clientX - 600) / 5,
                                y: (dets.clientY - 550) / 3
                            })
                        }} onMouseOut={() => {
                            gsap.to('.button button', {
                                x: 0,
                                y: 0
                            })
                        }} ><button>Book Now</button></div>
                    </div>
                </div>

                <div className='comp' >
                    <div className="left">
                        <div className="h1">
                            <h1>Swaminarayan Akshardham</h1>

                        </div>
                        <div className="p">
                            <p>{p1Letter.map((letter) => {
                                return <span>{letter}</span>
                            })}</p>


                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src="https://edge.ixigo.com/ixi-api/img/515ad58be4b05d932364322d_600x315.jpg" alt="" />
                        </div>

                        <div className="button" onMouseMove={(dets) => {
                            gsap.to('.button button', {
                                x: (dets.clientX - 600) / 5,
                                y: (dets.clientY - 550) / 3
                            })
                        }} onMouseOut={() => {
                            gsap.to('.button button', {
                                x: 0,
                                y: 0
                            })
                        }} ><button>Book Now</button></div>
                    </div>
                </div>



                {/* <Book2Comp image = {"https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} head={"Golden Temple"} p={". The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture."} />
       <Book2Comp image = {"https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} head={"Amber Palace"} p={"A Hindu temple and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture."} />
       <Book2Comp image = {"https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg"} head={"Ladakh"} p={"A Hindu temple and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture."} />
       <Book2Comp image = {"https://images.pexels.com/photos/7263943/pexels-photo-7263943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} head={"Taj Mahal"} p={"A Hindu temple and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture."} /> */}

            </div>

        </>
    )
}
