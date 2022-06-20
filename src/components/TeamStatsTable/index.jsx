import React from 'react';

//Conmponents 
// import TeamBasicInfoTable from './TeamBasicInfoTable';
import NumericalStatsTable from './NumericalStatsTable';
import LeagueRankingTable from './LeagueRankingTable';
import StatsKeyList from './StatsKeyList';



function TeamStatsTable(props) {
    const { allStats, tableData } = props;
    // const teamBasicInfo = tableData
    
    // Destructure for easier calling on tables
    const { numericalStats, leagueRanking, teamName } = allStats;
    console.log("numericalStats", numericalStats, "leagueRanking", leagueRanking, "teamName", teamName);

    return (
        <div className="container flex flex-col my-3 items-center opacity-80">
            <h2 className="font-extrabold my-4 text-white text-2xl bg-blue-200 rounded px-2 underline"> {teamName} </h2>
            {/* <TeamBasicInfoTable teamBasicInfo={teamBasicInfo} /> */}
            <NumericalStatsTable numericalStats={numericalStats} />
            <LeagueRankingTable leagueRanking={leagueRanking} />
            <StatsKeyList />
        </div>
    );
}

export default TeamStatsTable;