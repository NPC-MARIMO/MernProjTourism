import React from 'react'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full mt-[16vh] ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/London_Eye_-_tunliweb.no.JPG/800px-London_Eye_-_tunliweb.no.JPG"
                        className="w-full h-[60vh]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://d1taxzywhomyrl.cloudfront.net/s3/ag-images-eu/16/4ccda7ed46eecae1a649ff4ff40d4828.jpg?width=1700&height=464&mode=crop"
                        className="w-full h-[60vh]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://centreholidays.com/img/highlights/h153-c01-london-england.jpg"
                        className="w-full h-[60vh]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/London_Eye_-_tunliweb.no.JPG/800px-London_Eye_-_tunliweb.no.JPG"
                        className="w-full h-[60vh]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://static.javatpoint.com/tourist-places/images/tourist-places-in-uk8.jpg"
                        className="w-full h-[60vh]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider