import { useState } from 'react'
import Box from './Box'

export default function TodoList(){
  const [items, setItems] = useState(['Learn JSX','Understand components','Try state & props'])
  const [text, setText] = useState('')

  function addItem(e){
    e.preventDefault()
    if (!text.trim()) return
    setItems(prev => [...prev, text.trim()])
    setText('')
  }

  return (
    <Box>
      <h2 style={{marginTop:0}}>Todo List</h2>
      <form onSubmit={addItem} style={{marginBottom:8}}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="New item" style={{padding:6, marginRight:8}} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((it,i)=> <li key={i}>{it}</li>)}
      </ul>
    </Box>
  )
}
