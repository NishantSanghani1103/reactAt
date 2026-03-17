import { Link, useMatches } from "@tanstack/react-router";

export default function Breadcrumbs() {
    const matchs = useMatches()
    console.log(matchs);

    return (
        <>

            <div>
                {
                    matchs.map((value, index) => {
                        return (
                            <span key={index}>
                                <Link to={value.pathname}>
                                    {value.pathname}
                                </Link>

                            </span>
                        )
                    })
                }
            </div>
        </>
    )
}
