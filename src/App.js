import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Summary from './pages/Summary'
import Stats from './pages/Stats'

// Team data is fetched and normalized by python/fetch_teams.py (from the NHL
// public API) and committed as a static JSON file. Re-run that script to refresh.
import teamsData from './data/teams.json'


function App() {

  const tableHeaders = {
    team: "Team",
    city: "City",
    conference: "Conference",
    division: "Division",
    logo: "Logo"
  };
  const tableData = teamsData.map(item => {
    return {
      id: item.id,
      team: item.team,
      city: item.city,
      conference: item.conference,
      division: item.division,
      logo: item.logo,
      abbrev: item.abbrev
    };
  });

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/nhl_teams_api" element={<Summary tableHeaders={tableHeaders} tableData={tableData} />} />
          <Route path="/nhl_teams_api/stats/:id" element={<Stats tableData={tableData} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
