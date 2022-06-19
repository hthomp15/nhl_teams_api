import React, { useEffect, useState } from 'react'
import AllTeamsTable from '../../components/AllTeamsTable';

function Summary() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


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
            <div className="container">
                {/* Pass table headers and data to the table component */}
                <AllTeamsTable tableHeaders={tableHeaders} tableData={tableData} />
            </div>
        )
    }
};
export default Summary;