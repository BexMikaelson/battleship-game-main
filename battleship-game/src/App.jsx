import './App.css'
import Header from './Header'
import StartGame from './StartGame'
// import '../src/assets/App.scss'
import {useState} from 'react'

function App() {
  const [appState, setAppState] = useState('welcome'); // play or welcome
  
  const startPlay = () => {
    setAppState('play');
  };

  return (
    <div className="App">
      <Header/>
      {/* Renders either Welcome Screen or Game */}
      {appState === "play" ? <Game/> : <StartGame startPlay={startPlay}/>}
      

    </div>
  )
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App
