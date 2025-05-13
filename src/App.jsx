import { useState, useRef, useEffect } from 'react'
import './App.css'
import Die from './Die.jsx'
import { nanoid } from "nanoid"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())
const buttonRef = useRef(null)

  const { width, height } = useWindowSize()
  const gameWon = dice.every(die => die.value === dice[0].value) && dice.every(die => die.isHeld)

  useEffect(()=> {
    buttonRef.current.focus()
  }, [gameWon])
  
  function reset(){
    setDice(generateAllNewDice)
  }
  function hold(id) {
      setDice(prevDice => prevDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      }))
    }

  function generateAllNewDice() {
      const dice = []
      for (let i = 0; i < 10; i++) {
        const die = {
          value: Math.floor(Math.random() * 6) + 1,
          isHeld: false,
          id: nanoid()
        }
        dice.push(die)
      }
      return dice
    }

  const eachDie = dice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        isHeld={die.isHeld}
        hold={hold}
        id={die.id}
      />
    )
  })

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return !die.isHeld ? { ...die, value: Math.floor(Math.random() * 6) + 1 } : die
    }))
  }

  return (
    <>
      <main>
        {gameWon && <Confetti width={width} height={height} />}
        <div aria-live="polite" className="sr-only">{gameWon && <p>Congratulations! You won!</p>}</div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {eachDie}
        </div>
        <button ref={buttonRef} className="roll-btn" onClick={gameWon? reset: rollDice}>{gameWon? "New Game" : "Roll"}</button>
      </main>
    </>
  )
}

export default App
