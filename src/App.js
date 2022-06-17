import React, { useEffect, useState } from 'react'
import './App.css';

// Import Hooks for API

// Components 
import Nav from './components/Nav'
import Footer from './components/Footer'



function App() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(" https://statsapi.web.nhl.com/api/v1/teams")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
  return (
    <div className="App">
     <Nav></Nav>
      <div className="container">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Conference</th>
              <th className="px-4 py-2">Division</th>
              <th className="px-4 py-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {items.teams.map(item => (
              <tr>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.venue.city}</td>
                <td className="border px-4 py-2">{item.conference.name}</td>
                <td className="border px-4 py-2">{item.division.name}</td>
              </tr>
            ))}
          </tbody>

         </table>
      </div>
     <Footer></Footer>
    </div>
  );
}
}

export default App;
