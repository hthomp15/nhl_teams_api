import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components 
import Header from './components/Header'
import Footer from './components/Footer'

// Pages 
import Summary from './pages/Summary'
import Stats from './pages/Stats'


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

// Fetching data from the API, Need on highest lv to pass to both pages
  useEffect(() => {
    const getTeams = async () => {
      try {
        const url = "https://statsapi.web.nhl.com/api/v1/teams";
        const res = await fetch(url);
        console.log(res.ok);
        const data = await res.json();
        setIsLoaded(true);
        setItems(data.teams);
      } catch (error) {
        console.error(error);
        setError(error);
        setIsLoaded(true);
      }
    };
    getTeams()
  }, []);
  console.log("items", items);

  const tableHeaders = {
    team: "Team",
    city: "City",
    conference: "Conference",
    division: "Division",
    venue: "Venue",
    link: "Official Site"
  };
  const tableData = items.map(item => {
    return {
      id: item.id,
      team: item.name,
      city: item.venue.city,
      conference: item.conference.name,
      division: item.division.name,
      venue: item.venue.name,
      link: item.officialSiteUrl
    };
  });
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {

    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Summary tableHeaders={tableHeaders} tableData={tableData} />} />
            <Route path="stats/:id/" element={<Stats tableData={tableData} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}


export default App;
