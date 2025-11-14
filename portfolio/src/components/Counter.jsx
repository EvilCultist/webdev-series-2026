import { useState } from 'react'
import Box from './Box'

export default function Counter(){
  const [count, setCount] = useState(0)
  return (
    <Box>
      <h2 style={{marginTop:0}}>Counter</h2>
      <p style={{color: "blue"}}>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </Box>
  )
}
 