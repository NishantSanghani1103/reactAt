import { useTransition } from 'react'
import './App.css'

function App() {
  const [pending, setpending] = useTransition()
  const handleSubmit = () => {
    setpending(() => {
      return new Promise((res) => setTimeout((res), 2000))
    })
  }
  return (
    <>
      <h4>useTransition() Hooks</h4>

      <button disabled={pending} onClick={handleSubmit}>{pending ? "Submiting..." : "Submit"}</button>
      <br /><br />
      <hr />
    </>
  )
}

export default App
