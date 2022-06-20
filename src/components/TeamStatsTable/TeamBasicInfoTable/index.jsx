import React from "react";
import { useParams } from "react-router-dom";

function TeamBasicInfoTable(props) {
        // Get the correct team from the data with useParams
    const { teamBasicInfo } = props;
    const { id } = useParams();
    // Unable to find the team in the data
    const team = teamBasicInfo.find(function (team, index, array) {
        if (team.id === id) {
            return array;
        }
    }
    );
    console.log("team", team);

    console.log("teamBasicInfo", teamBasicInfo);

    return (
        <table className="team-stats-table table-auto w-3/4 border-2 border-collapse text-center mb-4">
                <thead className="bg-blue-200 text-white borde">
                    <tr>
                        <th className="border ">City</th>
                        <th className="border ">Conference</th>
                        <th className="border ">Division</th>
                        <th className="border ">Venue</th>
                        <th className="border ">Link</th>
                    </tr>
                </thead>
                <tbody className="">
                </tbody>  
            </table>
    );
}

export default TeamBasicInfoTable;