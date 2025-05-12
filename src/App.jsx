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
  function rollDice(){
    setDice(generateAllNewDice())

  }

  return (
    <>
      <main>
        <div className="dice-container">
          {eachDie}
        </div>
        <button className="roll-btn" onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}

export default App
