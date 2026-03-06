import { useState } from 'react'
import './App.css'

function App() {
  const [btn, setbtn] = useState(false)
  const handle = () => {
    setbtn(!btn)
  }
  return (
    <>
      <section onClick={handle} className='main' style={{ backgroundColor: `${btn ? '#008000bd' : 'rgb(156, 149, 149)'}` }}>
        <div onClick={handle} className={`${btn ? `switchOn movingElement` : `switch`}`} >
          <p onClick={handle}>{btn ? "on" : "off"}</p>
        </div>
      </section>
    </>
  )
}

export default App
