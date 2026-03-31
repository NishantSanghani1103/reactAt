import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainLayout() {
    const [search, setsearch] = useState("")
    const [skip, setskip] = useState(1)
    return (
        <>
            <Header setsearch={setsearch} setskip={setskip} />
            <Outlet context={{ search, skip, setskip }} />
            <Footer />
        </>
    )
}
