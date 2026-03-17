import { createFileRoute, useBlocker } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/nav")({
    component: NavComponent
})

function NavComponent() {
    const [name, setname] = useState("")
    const blocker = useBlocker({
        shouldBlock: true,
        condition: name
    }) 
    if (blocker.status == "blocked") {
        const cnfrm = window.confirm("Are You Sure Want To Leave ? ")
        if (cnfrm) {
            blocker.proceed()
        }
        else {
            blocker.reset();
        }
    }
    // useEffect(()=>{
    //     console.log(blocker);
        
    // },[blocker])
    return (
        <>
            <h1>Nav</h1>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)} />
        </>
    )
}