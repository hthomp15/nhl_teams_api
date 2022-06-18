import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Stats from "..";

afterEach(cleanup);

describe("Stats Component", () => {
    it("renders", () => {
        render(<Stats />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Stats />);
        expect(asFragment()).toMatchSnapshot();
    })
});