import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fatchUser } from '../reducer/userSlice'

export default function User() {

    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.user)
    console.log(user);

    useEffect(() => {
        dispatch(fatchUser())
    }, [])
    return (
        <div className="container py-4">
            <ul className="list-group">
                {
                    user?.map((value, index) => {
                        return (
                            <li
                                key={index}
                                className="list-group-item d-flex align-items-center justify-content-between"
                            >
                                <div className="d-flex align-items-center gap-3">

                                    <img
                                        src={value.avatar_url}
                                        alt={""}
                                        className="rounded-circle"
                                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                    />

                                    <div>
                                        <h6 className="mb-0">{value.login}</h6>

                                    </div>

                                </div>

                                <a
                                    href={value.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm btn-dark"
                                >
                                    View Profile
                                </a>

                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}
