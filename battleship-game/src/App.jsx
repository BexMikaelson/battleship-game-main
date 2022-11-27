import './App.css'
import Header from './Header'
import '../src/assets/App.scss'

function App({startPlay}) {
  

  return (
    <div className="App">
      <Header/>

      <main>
      <h2 className="tip-box-title">Rules</h2>
      <p className="player-tip">
        You and your opponent are competing navy commanders. Your fleets are positioned at
        secret coordinates, and you take turns firing torpedoes at each other. The first
        to sink the other person’s whole fleet wins!
      </p>
      <button onClick={startPlay}>Play</button>
    </main>
      

    </div>
  )
}

export default App
