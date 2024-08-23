const baseUrl = 'https://swapi.dev/api'

export async function getAllStarShips() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarShipId() {
  const res = await fetch(`${baseUrl}/starships/:id`)
  return res.json()
}