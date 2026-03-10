import React from 'react'
import "./UserLoader.css"
import { useLoaderData } from 'react-router-dom'
export default function UseLoader() {
    const { results } = useLoaderData()


    return (
        <>
            <h1>Movie App</h1>
            <div className="main">
                <form action="">
                    <input type="text" name="" id="" placeholder="Search Movies" />
                </form>
                <div className="mainOuter">
                    {
                        results.map((value, index) => {
                            let {poster_path,title,release_date,overview}=value
                            return (
                                <div className="mainOuter-itmes">
                                    <div className="mainOuter-itmes-image">
                                        <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt="" />
                                        <div className="mainOuter-items-description">
                                            <p>{overview}</p>
                                        </div>
                                    </div>
                                    <div className="mainOuter-contnet">
                                        <h6>{title}</h6>
                                        <p>{release_date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <p className="p"></p>
            </div>
        </>
    )
}
