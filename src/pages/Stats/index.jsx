import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// Components
import TeamStatsTable from '../../components/TeamStatsTable'
import StatsKeyList from '../../components/TeamStatsTable/StatsKeyList'

function Stats(props) {
    const { tableData } = props;
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [teamStats, setTeamStats] = useState([])
    const { id } = useParams()

    // Async call to get the team stats
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

        //Passing team stats to Component
        const allStats = {
            numericalStats: teamStats.stats[0].splits[0].stat,
            leagueRanking: teamStats.stats[1].splits[0].stat,
            teamName: teamStats.stats[0].splits[0].team.name
        }
        return (
            <div className="single-team-stats-table">
                <div className="flex justify-end mx-10">
                    <Link to="/nhl_teams_api">
                        <span className="flex hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 px-1" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Teams
                        </span>
                    </Link>
                </div>
                <TeamStatsTable allStats={allStats} tableData={tableData} />
            </div>
        )
    }
}
export default Stats;