import './App.css'
export default function Die(props) {
  // const [count, setCount] = useState(0)

  return (
    <>
        <button className={props.isHeld? "die-held" : "die"}>{props.value}</button>
    </>
  )
}