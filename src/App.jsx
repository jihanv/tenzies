import { useState } from 'react'
import './App.css'
import Die from './Die.jsx'

function App() {

  function generateAllNewDice() {
    const dice = []
    for (let i = 0; i < 10; i++) {
      dice.push(Math.floor(Math.random() * 6) + 1)
    }
    return dice
  }

  const [dice, setDice] = useState(generateAllNewDice)
  const eachDie = dice.map((number) => {
    return(
      <Die value={number} />
    )
  })

  return (
    <>
      <main>
        <div className="dice-container">
          {eachDie}
        </div>
      </main>
    </>
  )
}


export default App
