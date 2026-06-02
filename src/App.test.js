import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

// App now imports normalized team data from ./data/teams.json (produced by
// python/fetch_teams.py). Mock it so the test is independent of live data.
jest.mock("./data/teams.json", () => [
    {
        id: 1,
        team: "New York Rangers",
        city: "New York",
        conference: "Eastern",
        division: "Metropolitan",
        logo: "https://assets.nhle.com/logos/nhl/svg/NYR_light.svg",
        abbrev: "NYR",
        stats: { numericalStats: {}, leagueRanking: {} },
    },
    {
        id: 2,
        team: "Boston Bruins",
        city: "Boston",
        conference: "Eastern",
        division: "Atlantic",
        logo: "https://assets.nhle.com/logos/nhl/svg/BOS_light.svg",
        abbrev: "BOS",
        stats: { numericalStats: {}, leagueRanking: {} },
    },
]);

afterEach(cleanup);

test("it should load the team New York Rangers", async () => {
    // App mounts its own BrowserRouter; the teams table lives at /nhl_teams_api,
    // so point the location there before rendering.
    window.history.pushState({}, "", "/nhl_teams_api");
    render(<App />);
    const team = await screen.findByText("New York Rangers");
    expect(team).toBeInTheDocument();
});

describe("App Component", () => {
    it("renders", () => {
        render(<App />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    })
});
