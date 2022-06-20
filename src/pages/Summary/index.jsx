import React from 'react'
import AllTeamsTable from '../../components/AllTeamsTable';

function Summary(props) {
    const { tableHeaders, tableData } = props;
        return (
            <div className="container lg:py-5 lg:px-10">
                {/* Pass table headers and data to the table component */}
                <AllTeamsTable tableHeaders={tableHeaders} tableData={tableData} />
            </div>
        )
};
export default Summary;