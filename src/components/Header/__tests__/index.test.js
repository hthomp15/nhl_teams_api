import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Header from "..";

afterEach(cleanup);

describe("Nav Component", () => {
    it("renders", () => {
        render(<Header />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    })
});