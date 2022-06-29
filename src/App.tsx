import './App.scss'
import { BottomMiddle } from './sections/bottomMiddle/BottomMiddle'
import { BottomTop } from './sections/bottomTop/BottomTop'
import { Footer } from './sections/footer/Footer'
import { Header } from './sections/header/Header'
import { Middle } from './sections/middle/Middle'

function App() {

  return (
    <main className="App">
     <Header/>
     <Middle/>
     <BottomTop/>
     {/* <BottomMiddle/>
     <Footer/> */}
    </main>
  )
}

export default App
