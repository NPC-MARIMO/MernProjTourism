import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div
                className="hero min-h-[50vh] dark:bg-slate-100"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Contact Us</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hero bg-base-200 min-h-screen dark:bg-slate-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-10 ">
                        <h1 className="text-6xl font-bold">Feel free to Contact us </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl dark:bg-slate-200">
                        <form className="card-body" >
                            <div className="form-control">
                                <label className="label " >
                                    <span className="label-text dark:text-black">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered dark:bg-slate-100 dark:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black">Phone</span>
                                </label>
                                <input type="number" placeholder="Phone" className="input input-bordered dark:bg-slate-100 dark:text-black" required />
                                <label className="label">
                                    <span className="label-text dark:text-black">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered dark:bg-slate-100 dark:text-black" placeholder="Message"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact