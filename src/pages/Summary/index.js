import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Summary() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        const getTeams = async () => {
            const result = await fetch("https://statsapi.web.nhl.com/api/v1/teams")
                .then(res => res.json())
            setIsLoaded(true)
            setItems(result)
        }
        getTeams()
    }, [])
    console.log("items", items)
    if (error) {
        setIsLoaded(true)
        setError(error)
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="container">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Team</th>
                            <th className="px-4 py-2">City</th>
                            <th className="px-4 py-2">Conference</th>
                            <th className="px-4 py-2">Division</th>
                            <th className="px-4 py-2">Venue</th>
                            {/* This Messes up my table Padding */}
                            {/* <th className="px-4 py-2">Official Site</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {items.teams.map(item => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2"><Link to={`/stats/${item.id}`}>{item.name}</Link></td>
                                <td className="border px-4 py-2">{item.venue.city}</td>
                                <td className="border px-4 py-2">{item.conference.name}</td>
                                <td className="border px-4 py-2">{item.division.name}</td>
                                <td className="border px-4 py-2">{item.venue.name}</td>
                                {/* <td className="border px-4 py-2"><a href={item.officialSiteUrl}>{item.officialSiteUrl}</a></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Summary;