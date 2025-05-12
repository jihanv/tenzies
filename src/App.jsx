import { useState } from 'react'
import './App.css'
import Die from './Die.jsx'
import {nanoid} from "nanoid"
function App() {

     /**
     * Challenge: Update the `hold` function to flip
     * the `isHeld` property on the object in the array
     * that was clicked, based on the `id` prop passed
     * into the function.
     * 
     * Hint: as usual, there's more than one way to 
     * accomplish this.
     */ 

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
