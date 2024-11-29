import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todolist from './components/Todolist.jsx'
import Todolist2 from './Todolist2.jsx'
import ZooSimulator from './ZooSimulator.jsx'
import Chatbot from './Chatbot.jsx'
// import LoveDeterminer from './LoveDeterminer.jsx'
import SexDeterminer from './SexDetreminer.jsx'
import App2 from './App2.jsx'
import Solar from './Solar.jsx'
import Solar2 from './Solar2.jsx'
import Spec from './Spec.jsx'
import Game from './Game.jsx'
import WalkingMan from './WalkingMan.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Todolist/> */}
  {/* <App/> */}
  {/* <Todolist2/> */}
  {/* <ZooSimulator/> */}
  <Chatbot/>
  {/* <App2/> */}
  {/* <Solar/> */}
  {/* <Solar2/> */}
  {/* <Spec/> */}
  {/* <Game/> */}
  {/* <WalkingMan/> */}
  {/* <LoveDeterminer/> */}
  {/* <SexDeterminer/> */}
  </StrictMode>,
)
