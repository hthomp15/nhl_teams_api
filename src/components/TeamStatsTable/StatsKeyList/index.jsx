import React from "react";

function StatsKeyList() {
    return (
        <table className="table-auto w-1/3 text-center border-2">
            <tbody>
                <tr className="border border-white">
                    <th className="border border-white p-1">GP</th>
                    <td>Games Played</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">W</th>
                    <td>Wins</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">L</th>
                    <td>Losses</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">PTS</th>
                    <td>Points</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">OT</th>
                    <td>Overtime Games</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">GPG</th>
                    <td>Goals Per Game</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">GAPG</th>
                    <td>Goals Against Per Game</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">SV%</th>
                    <td>Save Percentage</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">S</th>
                    <td>Shots</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">SA</th>
                    <td>Shots Allowed</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">S%</th>
                    <td>Shooting Percentage</td>
                </tr>
                <tr className="border border-white">
                    <th className="border border-white p-1">FOW%</th>
                    <td>Faceoff Win Percentage</td>
                </tr>
            </tbody>
        </table>
    );
}

export default StatsKeyList;