import React from "react";

function NumericalStatsTable(props) {
    const { numericalStats } = props;

    const roundNumber = (number) => {
        return Math.round(number * 100) / 100;
    }
    
    return (
        <table className="team-stats-table table-auto w-3/4 border-2 border-collapse mb-4">
        <caption className="font-bold text-white bg-blue-200"> Regular Season Stats </caption>
            <thead className="">
                <tr>
                    <th className="border py-2">GP</th>
                    <th className="border py-2">W</th>
                    <th className="border py-2">L</th>
                    <th className="border py-2">PTS</th>
                    <th className="border py-2">OT</th>
                    <th className="border py-2">GPG</th>
                    <th className="border py-2">GAPG</th>
                    <th className="border py-2">SV%</th>
                    <th className="border py-2">S</th>
                    <th className="border py-2">SA</th>
                    <th className="border py-2">S%</th>
                    <th className="border py-2">FOW%</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td className="border px-2 py-2">{numericalStats.gamesPlayed}</td>
                    <td className="border px-2 py-2">{numericalStats.wins}</td>
                    <td className="border px-2 py-2">{numericalStats.losses}</td>
                    <td className="border px-2 py-2">{numericalStats.pts}</td>
                    <td className="border px-2 py-2">{numericalStats.ot}</td>
                    <td className="border px-2 py-2">{roundNumber(numericalStats.goalsPerGame)}</td>
                    <td className="border px-2 py-2">{roundNumber(numericalStats.goalsAgainstPerGame)}</td>
                    <td className="border px-2 py-2">{numericalStats.savePctg}</td>
                    <td className="border px-2 py-2">{roundNumber(numericalStats.shotsPerGame)}</td>
                    <td className="border px-2 py-2">{roundNumber(numericalStats.shotsAllowed)}</td>
                    <td className="border px-2 py-2">{numericalStats.shootingPctg}</td>
                    <td className="border px-2 py-2">{numericalStats.faceOffWinPercentage}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default NumericalStatsTable;