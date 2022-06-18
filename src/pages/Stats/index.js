import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Stats() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [teamStats, setteamStats] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setteamStats(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])
    console.log("teamStats", teamStats)
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="container">
                <h2> {teamStats.stats[0].splits[0].team.name} </h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">GP</th>
                            <th className="px-4 py-2">W</th>
                            <th className="px-4 py-2">L</th>
                            <th className="px-4 py-2">PTS</th>
                            <th className="px-4 py-2">OT</th>
                            <th className="px-4 py-2">GPG</th>
                            <th className="px-4 py-2">GAPG</th>
                            <th className="px-4 py-2">SV%</th>
                            <th className="px-4 py-2">S</th>
                            <th className="px-4 py-2">SA</th>
                            <th className="px-4 py-2">S%</th>
                            <th className="px-4 py-2">FOW%</th>
                        </tr>
                    </thead>
                    <caption> Regular Season Stats </caption>
                    <tbody>
                        
                            <tr>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.gamesPlayed}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.wins}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.losses}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.pts}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.ot}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.goalsPerGame}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.goalsAgainstPerGame}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.savePctg}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.shotsPerGame}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.shotsAllowed}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.shootingPctg}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.faceOffWinPercentage}</td>
                            </tr>
                    </tbody>
                </table>
                <table className="table-auto w-full">
                    <caption> Regular Season Rankings </caption>
                    <thead>
                        <tr>
                            <th className="px-4 py-2">GP</th>
                            <th className="px-4 py-2">W</th>
                            <th className="px-4 py-2">L</th>
                            <th className="px-4 py-2">PTS</th>
                            <th className="px-4 py-2">OT</th>
                            <th className="px-4 py-2">GPG</th>
                            <th className="px-4 py-2">GAPG</th>
                            <th className="px-4 py-2">SV%</th>
                            <th className="px-4 py-2">S</th>
                            <th className="px-4 py-2">SA</th>
                            <th className="px-4 py-2">S%</th>
                            <th className="px-4 py-2">FOW%</th>
                        </tr>
                    </thead>
                 
                    <tbody>
                     
                            <tr>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.gamesPlayed}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.wins}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.losses}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.pts}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.ot}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.goalsPerGame}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.goalsAgainstPerGame}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.savePctg}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.shotsPerGame}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.shotsAllowed}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.shootingPctg}</td>
                                <td className="border px-4 py-2">{teamStats.stats[0].splits[0].stat.faceOffWinPercentage}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Stats;