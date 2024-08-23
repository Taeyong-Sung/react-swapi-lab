// npm modules
// import { useState } from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import './App.css'

// services
import { getAllStarShips } from './services/sw-api'


const App = () => {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarShips = async () => {
      const {results} = await getAllStarShips()
      setStarShips(results)
    }
    fetchStarShips()
  }, [])


  return (
  <>
    <nav>STAR WARS STARSHIPS</nav>
    <main className="starShip-list">
      {starShips.map(starShip =>
        <div className="link-container" key={starShip.url}>
            {starShip.name}
        </div>
      )}
    </main>
  </>
  );
}

export default App;