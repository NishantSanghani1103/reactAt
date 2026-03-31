import React from 'react'
import { useSelector } from 'react-redux'

export default function UnAuthorized() {
    const { user } = useSelector((store) => store.user)
    return (
        <div>UnAuthorized for {user.role}</div>
    )
}
