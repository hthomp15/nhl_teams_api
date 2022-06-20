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
        <table className="table-auto w-full rounded opacity-80">
            <thead className="bg-blue-200">
                <tr>
                    <th className="border border-white text-white font-extrabold px-1" onClick={() => sortTeams('team')}>
                        {tableHeaders.team}
                        {/* If the column is sorted, add an arrow pointing for asc or dec order */}
                        {(!isSorted && <span className="px-1">&#9660;</span>) || (isSorted && <span className="px-1">&#9650;</span>)}
                    </th>
                    <th className="border border-white text-white font-extrabold px-1" onClick={() => sortTeams('city')}>
                        {tableHeaders.city}
                        {(!isSorted && <span className="px-1">&#9660;</span>) || (isSorted && <span className="px-1">&#9650;</span>)}
                    </th>
                    <th className="border border-white text-white font-extrabold px-1" onClick={() => sortTeams('conference')}>
                        {tableHeaders.conference}
                        {(!isSorted && <span className="px-1">&#9660;</span>) || (isSorted && <span className="px-1">&#9650;</span>)}

                    </th>
                    <th className="border border-white text-white font-extrabold px-1" onClick={() => sortTeams('division')}>
                        {tableHeaders.division}
                        {(!isSorted && <span className="px-1">&#9660;</span>) || (isSorted && <span className="px-1">&#9650;</span>)}
                    </th>
                    <th className="border border-white text-white font-extrabold px-1" onClick={() => sortTeams('venue')}>
                        {tableHeaders.venue}
                        {(!isSorted && <span className="px-1">&#9660;</span>) || (isSorted && <span className="px-1">&#9650;</span>)}
                    </th>
                    {/* <th className="border border-white text-white font-extrabold px-1">{tableHeaders.link}</th> */}
                </tr>
            </thead>
            <tbody className="bg-blue-200/30 text-dark">
                 {/* Loop through the data and display each team */}
                {tableData.map(item => (
                    <tr className="hover:bg-blue-200/60 hover:text-white text-center" key={item.id}>
                        <td className="border border-white px-2"><Link to={`/stats/${item.id}`}>{item.team}</Link></td>
                        <td className="border border-white px-2"><Link to={`/stats/${item.id}`}>{item.city}</Link></td>
                        <td className="border border-white px-2"><Link to={`/stats/${item.id}`}>{item.conference}</Link></td>
                        <td className="border border-white px-2"><Link to={`/stats/${item.id}`}>{item.division}</Link></td>
                        <td className="border border-white px-2"><Link to={`/stats/${item.id}`}>{item.venue}</Link></td>
                        {/* <td className="border border-white px-2"><a href={item.link} target="blank" rel="nonreferrer noopener">{item.link}</a></td> */}
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default AllTeamsTable;