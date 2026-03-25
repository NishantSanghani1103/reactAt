import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useStore } from '@tanstack/react-store'
import { counterStore } from './store/counterStore'

function App() {

  const { count } = useStore(counterStore, (store) => store)
  console.log(count);
  const countAdd = () => {
    counterStore.setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1
      }
    })
  }
  return (
    <>
      <p>Count Is : {count}</p>
      <button onClick={countAdd}>Count +</button>
    </>
  )
}

export default App
