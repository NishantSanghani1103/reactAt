import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { singleView } from '../api/PostApi'

export default function PostDetails() {
    const { id } = useParams()
    const getDetails = async () => {
        try {
            const res = await singleView(id)
            return res.data
        } catch (error) {
            console.log(error);

        }


    }

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["posts", id],
        queryFn: getDetails
    })
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error: {error.message}</h1>
    return (
        <div className="col-12 col-md-6 col-lg-4">
            {
               
                <div className="card bg-dark text-light h-100 p-3">

                    <p>{data.id}</p>

                    <p >
                        <strong >Title:</strong> {data.title}
                    </p>

                    <p>
                        <strong>News:</strong> {data.body}
                    </p>


                    <div className="mt-auto">
                        <button className="btn btn-success me-2" >EDIT</button>
                        <button className="btn btn-danger" >DELETE</button>
                        <Link to={'/'}>Go Back</Link>
                    </div>
                </div>
            }

        </div>

    )
}
