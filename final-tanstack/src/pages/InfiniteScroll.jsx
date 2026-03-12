/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect } from 'react'
import { getUser } from '../api/UserApi'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function InfiniteScroll() {



    const fetchUser = async ({ pageParam = 1 }) => {
        const res = await getUser(pageParam)
        return res.data
    }


    const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchUser,
        getNextPageParam: (lastPage, allPage) => {
            console.log(allPage);
            return lastPage.length < 10 ? undefined : allPage.length + 1
        }
    })
    console.log(hasNextPage);

    const handleChange = () => {
        console.log(window.innerHeight);
        console.log("scroll", window.scrollY);
        console.log("final", document.documentElement.scrollHeight);
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
        console.log(bottom);

        if (bottom && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleChange)
        return () => {
            window.removeEventListener("scroll", handleChange)
        }
    }, [hasNextPage, isFetchingNextPage])

    return (
        <div className="container py-4">
            <ul className="list-group">
                {
                    isLoading
                        ?
                        <li className='list-group-item d-flex align-items-center justify-content-between'>Loading....</li>
                        :
                        isError
                            ?
                            <p>{error.message}</p>
                            :
                            data?.pages?.map((user, index) => {
                                return user.map((value, index) => {
                                    return (
                                        <li
                                            key={value.id}
                                            className="list-group-item d-flex align-items-center justify-content-between"
                                        >
                                            <div className="d-flex align-items-center gap-3">

                                                <img
                                                    src={value.avatar_url}
                                                    alt={value.login}
                                                    className="rounded-circle"
                                                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                />

                                                <div>
                                                    <h6 className="mb-0">{value.login}</h6>

                                                </div>

                                            </div>

                                            <a
                                                href={value.html_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-sm btn-dark"
                                            >
                                                View Profile
                                            </a>

                                        </li>
                                    )
                                })


                            })
                }
                {
                    isFetchingNextPage
                    &&
                    <p>Loagin More....</p>
                }
            </ul>
        </div>

    )
}
