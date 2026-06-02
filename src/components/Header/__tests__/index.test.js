import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

import Header from "..";

afterEach(cleanup);

const renderHeader = () =>
    render(<MemoryRouter><Header /></MemoryRouter>);

describe("Nav Component", () => {
    it("renders", () => {
        renderHeader();
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = renderHeader();
        expect(asFragment()).toMatchSnapshot();
    })
});