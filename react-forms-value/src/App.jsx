import { useState } from "react"

function App() {

  const [passwordStatus, setpasswordStatus] = useState(false)

  const showPassword = () => {

  }
  return (
    <>
      <section>
        <input type={`${passwordStatus ? "text" : "password"}`} />
        <button onClick={() => setpasswordStatus(!passwordStatus)}>{passwordStatus ? "Hide" : "Show"} Password</button>
      </section>
    </>
  )
}

export default App
