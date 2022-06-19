import React from 'react';


function TeamStatsTable(props) {
    const { allStats } = props;
    const { numericalStats, leagueRanking, teamName } = allStats;
    // console.log("numericalStats", numericalStats, "leagueRanking", leagueRanking, "teamName", teamName);
    return (
        <div className="container">
            <h2> {teamName} </h2>
            <table className="team-stats-table table-auto w-full">
            <caption> Regular Season Stats </caption>
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
                        <td className="border px-4 py-2">{numericalStats.gamesPlayed}</td>
                        <td className="border px-4 py-2">{numericalStats.wins}</td>
                        <td className="border px-4 py-2">{numericalStats.losses}</td>
                        <td className="border px-4 py-2">{numericalStats.pts}</td>
                        <td className="border px-4 py-2">{numericalStats.ot}</td>
                        <td className="border px-4 py-2">{numericalStats.goalsPerGame}</td>
                        <td className="border px-4 py-2">{numericalStats.goalsAgainstPerGame}</td>
                        <td className="border px-4 py-2">{numericalStats.savePctg}</td>
                        <td className="border px-4 py-2">{numericalStats.shotsPerGame}</td>
                        <td className="border px-4 py-2">{numericalStats.shotsAllowed}</td>
                        <td className="border px-4 py-2">{numericalStats.shootingPctg}</td>
                        <td className="border px-4 py-2">{numericalStats.faceOffWinPercentage}</td>
                    </tr>
                </tbody>
            </table>
            <table className="league-rankings-table table-auto w-full">
                <caption> Regular Season Rankings </caption>
                <thead>
                    <tr>
                        <th className="px-4 py-2">Overall</th>
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
                        <td className="border px-4 py-2">{leagueRanking.pts}</td>
                        <td className="border px-4 py-2">{leagueRanking.goalsPerGame}</td>
                        <td className="border px-4 py-2">{leagueRanking.goalsAgainstPerGame}</td>
                        <td className="border px-4 py-2">{leagueRanking.savePctRank}</td>
                        <td className="border px-4 py-2">{leagueRanking.shotsPerGame}</td>
                        <td className="border px-4 py-2">{leagueRanking.shotsAllowed}</td>
                        <td className="border px-4 py-2">{leagueRanking.shootingPctRank}</td>
                        <td className="border px-4 py-2">{leagueRanking.faceOffWinPercentage}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TeamStatsTable;