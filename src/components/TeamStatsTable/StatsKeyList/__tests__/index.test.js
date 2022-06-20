import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import StatsKeyList from "..";

afterEach(cleanup);

describe("StatsKeyList Component", () => {
    it("renders", () => {
        render(<StatsKeyList />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<StatsKeyList />);
        expect(asFragment()).toMatchSnapshot();
    })
});