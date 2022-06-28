import './App.scss'
import { BottomMiddle } from './sections/bottomMiddle/BottomMiddle'
import { BottomTop } from './sections/bottomTop/BottomTop'
import { Header } from './sections/header/Header'
import { Middle } from './sections/middle/Middle'

function App() {

  return (
    <main className="App">
     <Header/>
     <Middle/>
     <BottomTop/>
     <BottomMiddle/>
    </main>
  )
}

export default App
