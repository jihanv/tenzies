import { useState } from 'react'
import './App.css'
import Die from './Die.jsx'
import {nanoid} from "nanoid"
function App() {

  function generateAllNewDice() {
    const dice = []
    for (let i = 0; i < 10; i++) {
      const die = {
        value : Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      }
      dice.push(die)
    }
    return dice
  }

  const [dice, setDice] = useState(generateAllNewDice)
  const eachDie = dice.map((die) => {
    return(
      <Die value={die.value} key={die.id}/>
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
