import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "./redux/slices/counterSlice"

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      {console.log(count)}
      <h1>Hello counter value :- {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </>
  )
}

export default App
