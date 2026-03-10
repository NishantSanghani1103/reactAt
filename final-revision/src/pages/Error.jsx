import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function Error404() {
    const { data } = useRouteError()
    const nav = useNavigate()
    const handleGoBack = () => {
        nav(-1)
    }

    return (
        <div>
            Page Not Founds {data}
            <br />
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}
