import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TeamStatsTable from "..";

const numericalStats = { 
    gamesPlayed: "1",
    wins: "1",
    losses: "1",
    pts: "1",
    ot: "1",
    goalsPerGame: "1",
    goalsAgainstPerGame: "1",
    savePctg: "1",
    shotsPerGame: "1",
    shotsAllowed: "1",
    shootingPctg: "20",
    faceOffWinPercentage: "20"
}

const leagueRanking = {
    pts: "1",
    goalsPerGame: "1",
    goalsAgainstPerGame: "1",
    savePctRank: "1",
    shotsPerGame: "1",
    shotsAllowed: "1",
    shootingPctRank: "1",
    faceOffWinPercentage: "1"
}

const teamName = "Test Team";

const allStats = { numericalStats, leagueRanking, teamName }

afterEach(cleanup);

describe("TeamStatsTable Component", () => {
    it("renders", () => {
        render(<TeamStatsTable allStats={allStats} />);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<TeamStatsTable allStats={allStats} />);
        expect(asFragment()).toMatchSnapshot();

    })
});