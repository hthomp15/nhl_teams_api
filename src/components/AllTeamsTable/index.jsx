import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamLogo from "../TeamLogo";

function AllTeamsTable(props) {
    const { tableHeaders = {}, tableData = [] } = props;

    const [order, setOrder] = useState('desc');
    const [data, setData] = useState(tableData);
    const [isSorted, setIsSorted] = useState(false);


// Sort Teams by the column header clicked
    const sortTeams = (column) => {
        // Copy first so we never mutate state in place.
        const sorted = [...data].sort((a, b) => {
            if (order === 'asc') {
                return a[column] > b[column] ? 1 : -1;
            }
            return a[column] > b[column] ? -1 : 1;
        });
        setData(sorted);
        setOrder(order === 'asc' ? 'desc' : 'asc');
        setIsSorted(order === 'asc' ? false : true);
    }

    const arrow = (
        <span className="px-1 text-ice">{isSorted ? "▲" : "▼"}</span>
    );

    const headerClass =
        "border border-rink-border bg-rink-700 text-slate-200 font-display font-bold uppercase tracking-wide px-3 py-2 cursor-pointer select-none hover:text-ice";

    return (
        <div className="overflow-hidden rounded-xl border border-rink-border shadow-card">
            <table className="w-full table-auto text-sm">
                <thead>
                    <tr>
                        <th className={headerClass} onClick={() => sortTeams('team')}>
                            {tableHeaders.team}
                            {arrow}
                        </th>
                        <th className={headerClass} onClick={() => sortTeams('city')}>
                            {tableHeaders.city}
                            {arrow}
                        </th>
                        <th className={headerClass} onClick={() => sortTeams('conference')}>
                            {tableHeaders.conference}
                            {arrow}
                        </th>
                        <th className={headerClass} onClick={() => sortTeams('division')}>
                            {tableHeaders.division}
                            {arrow}
                        </th>
                        <th className="border border-rink-border bg-rink-700 text-slate-200 font-display font-bold uppercase tracking-wide px-3 py-2">
                            {tableHeaders.logo}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render the sorted `data` (not the original prop) so clicks take effect. */}
                    {data.map(item => (
                        <tr
                            className="bg-rink-850 text-center text-slate-200 odd:bg-rink-800 hover:bg-rink-700 hover:text-white transition-colors"
                            key={item.id}
                        >
                            <td className="border border-rink-border px-3 py-2 text-left font-semibold">
                                <Link className="hover:text-ice" to={`/nhl_teams_api/stats/${item.id}`}>{item.team}</Link>
                            </td>
                            <td className="border border-rink-border px-3 py-2">
                                <Link className="hover:text-ice" to={`/nhl_teams_api/stats/${item.id}`}>{item.city}</Link>
                            </td>
                            <td className="border border-rink-border px-3 py-2">
                                <Link className="hover:text-ice" to={`/nhl_teams_api/stats/${item.id}`}>{item.conference}</Link>
                            </td>
                            <td className="border border-rink-border px-3 py-2">
                                <Link className="hover:text-ice" to={`/nhl_teams_api/stats/${item.id}`}>{item.division}</Link>
                            </td>
                            <td className="border border-rink-border px-3 py-2">
                                <Link className="flex justify-center" to={`/nhl_teams_api/stats/${item.id}`}>
                                    <TeamLogo logo={item.logo} abbrev={item.abbrev} team={item.team} className="h-10 w-10" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllTeamsTable;
