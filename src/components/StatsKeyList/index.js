import React from "react";

function StatsKeyList() {
    return (
        <table>
            <tbody>
                <tr>
                    <th>GP</th>
                    <td>Games Played</td>
                </tr>
                <tr>
                    <th>W</th>
                    <td>Wins</td>
                </tr>
                <tr>
                    <th>L</th>
                    <td>Losses</td>
                </tr>
                <tr>
                    <th>PTS</th>
                    <td>Points</td>
                </tr>
                <tr>
                    <th>OT</th>
                    <td>Overtime Games</td>
                </tr>
                <tr>
                    <th>GPG</th>
                    <td>Goals Per Game</td>
                </tr>
                <tr>
                    <th>GAPG</th>
                    <td>Goals Against Per Game</td>
                </tr>
                <tr>
                    <th>SV%</th>
                    <td>Save Percentage</td>
                </tr>
                <tr>
                    <th>S</th>
                    <td>Shots</td>
                </tr>
                <tr>
                    <th>SA</th>
                    <td>Shots Allowed</td>
                </tr>
                <tr>
                    <th>S%</th>
                    <td>Shooting Percentage</td>
                </tr>
                <tr>
                    <th>FOW%</th>
                    <td>Faceoff Win Percentage</td>
                </tr>
            </tbody>
        </table>
    );
}

export default StatsKeyList;