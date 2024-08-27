// npm modules
import { useState, useEffect } from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'

// services
import { getAllStarShips} from './services/sw-api'

const StarShipsList = ({ starShips }) => (
  <div className="starShip-container">
    <nav>STAR WARS STARSHIPS</nav>
    <main>
      {starShips.map((starShip, index) => (
        <div className="starShip-card" key={index}>
          <Link to={`/starships/${index}`}>
            {starShip.name}
          </Link>
        </div>
      ))}
    </main>
  </div>
)

const StarShipDetail = ({ starShips }) => {
  const { starShipId } = useParams()
  const starShip = starShips[starShipId]

  return (
    <div className="starShip-detail">
      <h3>NAME: {starShip.name}</h3>
      <h3>MODEL: {starShip.model}</h3>
      <Link to="/">Return to Starship List</Link>
    </div>
  )
}

const App = () => {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarShips = async () => {
      const { results } = await getAllStarShips()
      setStarShips(results)
    }
    fetchStarShips()
  }, [])

  if (!starShips.length) return <h1>Loading…</h1>

  return (
    <Routes>
      <Route 
      path="/" 
      element={<StarShipsList 
      starShips={starShips} />} />
      <Route 
      path="/starships/:starShipId" 
      element={<StarShipDetail 
      starShips={starShips} />} />
    </Routes>
  )
}

export default App