import './App.css'
export default function Die(props) {
  // const [count, setCount] = useState(0)

  return (
    <>
        <button 
          className={props.isHeld? "die-held" : "die"} 
          onClick={() => props.hold(props.id)}
          aria-label={`This is a die with value ${props.value}, ${props.isHeld? "held" :"not held"}`}>
            {props.value} 
        </button>
    </>
  )
}