import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { rest } from "msw";
import { setupServer } from "msw/node";
import Summary from "..";

const getTeamsResponse = rest.get("https://statsapi.web.nhl.com/api/v1/teams", (req, res, ctx) => {
    return res(
        ctx.json([{
            teams: [
                {
                    id: "1",
                    name: "New York Rangers",
                    venue: {
                        name: "Madison Square Garden",
                        city: "New York",
                    },
                    conference: {
                        name: "Eastern",
                    },
                    division: {
                        name: "Metropolitan",
                    },
                },
                {
                    id: "2",
                    name: "Boston Bruins",
                    venue: {
                        name: "TD Garden",
                        city: "Boston",
                    },
                    conference: {
                        name: "Eastern",
                    },
                    division: {
                        name: "Metropolitan",
                    },
                },
            ],
        }])
    );
});

const server = new setupServer(getTeamsResponse);

beforeAll(() => server.listen());
afterEach(cleanup);
afterAll(() => server.close());


test("it should load the team New York Rangers", async () => {
    render(<Summary />);
    const team = await screen.findByText(items.teams.venue.name);
    expect(team).toBeInTheDocument();
});

describe("Summary Component", () => {
    it("renders", () => {
        render(<Summary />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Summary />);
        expect(asFragment()).toMatchSnapshot();
    })
});
