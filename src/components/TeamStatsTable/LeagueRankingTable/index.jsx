import React from "react";


function LeagueRankingTable(props) {
    const { leagueRanking } = props;

    return (
        <table className="league-rankings-table table-auto w-3/4 border-2 border-collapse mb-4">
        <caption className="font-bold text-white bg-blue-200"> Regular Season Rankings </caption>
        <thead>
            <tr>
                <th className="border py-2">Overall</th>
                <th className="border py-2">GPG</th>
                <th className="border py-2">GAPG</th>
                <th className="border py-2">SV%</th>
                <th className="border py-2">S</th>
                <th className="border py-2">SA</th>
                <th className="border py-2">S%</th>
                <th className="border py-2">FOW%</th>
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
    )
}

export default LeagueRankingTable;