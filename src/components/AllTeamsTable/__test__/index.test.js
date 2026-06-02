import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

import AllTeamsTable from "..";

afterEach(cleanup);

const tableHeaders = {
    team: "Team",
    city: "City",
    conference: "Conference",
    division: "Division",
    logo: "Logo",
};

const tableData = [
    {
        id: 1,
        team: "New York Rangers",
        city: "New York",
        conference: "Eastern",
        division: "Metropolitan",
        logo: "https://assets.nhle.com/logos/nhl/svg/NYR_light.svg",
        abbrev: "NYR",
    },
];

describe("AllTeamsTable Component", () => {
    it("renders", () => {
        render(
            <MemoryRouter>
                <AllTeamsTable tableHeaders={tableHeaders} tableData={tableData} />
            </MemoryRouter>
        );
    });
});
