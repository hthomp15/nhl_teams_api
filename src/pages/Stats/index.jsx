import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// Components
import TeamStatsTable from '../../components/TeamStatsTable'
import StatsKeyList from '../../components/StatsKeyList'

function Stats() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [teamStats, setTeamStats] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getTeamStats = async () => {
            try {
                const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`
                const res = await fetch(url)
                console.log(res.ok)
                const data = await res.json()
                setIsLoaded(true)
                setTeamStats(data)
            } catch (error) {
                console.error(error)
                setError(error)
                setIsLoaded(true)
            }
        };
        getTeamStats()
    }, [id])
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
                <Link to="/"><span>Back to Teams</span></Link>
                <TeamStatsTable allStats={allStats} />
                <StatsKeyList />
            </div>
        )
    }
}
export default Stats;