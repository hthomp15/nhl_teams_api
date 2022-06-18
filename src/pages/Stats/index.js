import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Components
import TeamStatsTable from '../../components/TeamStatsTable'
import StatsKeyList from '../../components/StatsKeyList'

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
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        const allStats = {
            numericalStats: teamStats.stats[0].splits[0].stat,
            leagueRanking: teamStats.stats[1].splits[0].stat, 
            teamName: teamStats.stats[0].splits[0].team.name
        }
        return (
            <div className="single-team-stats-table">
                <TeamStatsTable allStats={allStats} />
                <StatsKeyList />
            </div>
        )
    }
}
export default Stats;