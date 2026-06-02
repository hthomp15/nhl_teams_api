import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

import Summary from "..";

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

const renderSummary = () =>
    render(
        <MemoryRouter>
            <Summary tableHeaders={tableHeaders} tableData={tableData} />
        </MemoryRouter>
    );

describe("Summary Component", () => {
    it("renders", () => {
        renderSummary();
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = renderSummary();
        expect(asFragment()).toMatchSnapshot();
    })
});
