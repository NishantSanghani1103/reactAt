import { Link, useMatches } from '@tanstack/react-router'
import React, { useEffect } from 'react'

export default function Breadcrumbs() {
    const matches = useMatches()

console.log(matches);

    return (
        <nav style={{ marginBottom: '20px' }}>
            {
                matches.map((match, index) => {
                    const name = match?.route?.id || match.pathname
                    return (
                        <span key={index}>
                            <Link to={match.pathname}>{name}</Link>

                        </span>
                    )
                })
            }

        </nav>
    )
}
