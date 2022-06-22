import './App.scss'
import { BottomTop } from './sections/bottomTop/BottomTop'
import { Header } from './sections/header/Header'
import { Middle } from './sections/middle/Middle'

function App() {

  return (
    <main className="App">
     <Header/>
     <Middle/>
     <BottomTop/>
    </main>
  )
}

export default App
