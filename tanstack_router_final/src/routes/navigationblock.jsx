import { createFileRoute, useBlocker } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/navigationblock')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const [name, setname] = useState("")
  const blocker = useBlocker({
    shouldBlock: true,
    condition:name
  })
  // console.log(blocker);
  if (blocker.status == "blocked") {
    const cnfrm = window.confirm("Are You Want To Navigate ? ")
    if (cnfrm) {
      blocker.proceed()
    }
    else {
      blocker.reset()
    }
  }
  return (
    <>
      <div>
        <p>Hello "/navigationblock"!</p>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setname(e.target.value)} />
      </div>
    </>
  )
}
