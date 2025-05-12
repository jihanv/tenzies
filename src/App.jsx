import { useState } from 'react'
import './App.css'
import Die from './Die.jsx'
import {nanoid} from "nanoid"
function App() {

  function hold(id){
    setDice(prevDice => prevDice.map( die => {
      return die.id === id? {...die, isHeld: !die.isHeld} : die
    }))
  }

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
      <Die 
        value={die.value} 
        key={die.id} 
        isHeld={die.isHeld} 
        hold={hold} 
        id={die.id}
        />
    )
  })

      /**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT role any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `holdDice`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */
  function rollDice(){
    setDice(prevDice => prevDice.map( die => {
      return !die.isHeld ? {...die, value: Math.floor(Math.random() * 6) + 1} : die
    }))
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
