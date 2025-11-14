import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

function App(){
  return (
    <div style={{maxWidth:980, margin:'0 auto', padding:16}}>
      <Header />
      <main>
        <Counter />
        <TodoList />  
      </main>
      <Footer />
    </div>
  )
}

export default App
