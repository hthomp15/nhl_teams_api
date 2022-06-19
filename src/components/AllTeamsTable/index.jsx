import React, { useState } from "react";
import { Link } from "react-router-dom";


function AllTeamsTable(props) {
    const { tableHeaders, tableData } = props;

    const [order, setOrder] = useState('desc');
    const [data, setData] = useState(tableData);
    const [isSorted, setIsSorted] = useState(false);


// Sort Teams by the column header clicked
    const sortTeams = (column) => {
        // If the column is already sorted, reverse the order
        if (order === 'asc') {
            const sordedData = data.sort((a, b) => a[column] > b[column] ? 1 : -1);
            setData(sordedData);
            setOrder('desc');
            setIsSorted(true);
        // If the column is not sorted, sort it in ascending order
        } else {
            const sordedData = data.sort((a, b) => a[column] > b[column] ? -1 : 1);
            setData(sordedData);
            setOrder('asc');
            setIsSorted(false);
        }
    }

    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="border border-gray-300" onClick={() => sortTeams('team')}>
                        {tableHeaders.team}
                        {/* If the column is sorted, add an arrow pointing for asc or dec order */}
                        {(!isSorted && <span>&#9660;</span>) || (isSorted && <span>&#9650;</span>)}
                    </th>
                    <th className="border border-gray-300" onClick={() => sortTeams('city')}>
                        {tableHeaders.city}
                        {(!isSorted && <span>&#9660;</span>) || (isSorted && <span>&#9650;</span>)}
                    </th>
                    <th className="border border-gray-300" onClick={() => sortTeams('conference')}>
                        {tableHeaders.conference}
                        {(!isSorted && <span>&#9660;</span>) || (isSorted && <span>&#9650;</span>)}

                    </th>
                    <th className="border border-gray-300" onClick={() => sortTeams('division')}>
                        {tableHeaders.division}
                        {(!isSorted && <span>&#9660;</span>) || (isSorted && <span>&#9650;</span>)}
                    </th>
                    <th className="border border-gray-300" onClick={() => sortTeams('venue')}>
                        {tableHeaders.venue}
                        {(!isSorted && <span>&#9660;</span>) || (isSorted && <span>&#9650;</span>)}
                    </th>
                    <th className="border border-gray-300">{tableHeaders.link}</th>
                </tr>
            </thead>
            <tbody>
                 {/* Loop through the data and display each team */}
                {tableData.map(item => (
                    <tr key={item.id}>
                        <td className="border p-2">
                            <Link to={`/stats/${item.id}`}>{item.team}</Link>
                        </td>
                        <td className="border p-2">{item.city}</td>
                        <td className="border p-2">{item.conference}</td>
                        <td className="border p-2">{item.division}</td>
                        <td className="border p-2">{item.venue}</td>
                        <td className="border p-2"><a href={item.link} target="blank" rel="nonreferrer noopener">{item.link}</a></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default AllTeamsTable;