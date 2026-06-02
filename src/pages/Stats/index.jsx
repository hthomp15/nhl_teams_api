import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Components
import TeamStatsTable from '../../components/TeamStatsTable'

// Team data (including per-team stats) is normalized by python/fetch_teams.py.
import teamsData from '../../data/teams.json'

function Stats(props) {
    const { tableData } = props;
    const { id } = useParams()

    // Stats now come from the committed JSON instead of a live API call.
    const team = teamsData.find(t => String(t.id) === id)
    if (!team) {
        return <div>Team not found</div>
    } else {

        //Passing team stats + metadata + roster to Component
        const allStats = {
            numericalStats: team.stats.numericalStats,
            leagueRanking: team.stats.leagueRanking,
            teamName: team.team,
            logo: team.logo,
            abbrev: team.abbrev,
            city: team.city,
            conference: team.conference,
            division: team.division,
            roster: team.roster
        }
        return (
            <div className="single-team-stats-table">
                <div className="container flex justify-start pt-2">
                    <Link to="/nhl_teams_api">
                        <span className="flex items-center text-slate-300 hover:text-ice transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-1" fill="none"
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