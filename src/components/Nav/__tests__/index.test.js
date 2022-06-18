import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Nav from "..";

afterEach(cleanup);

describe("Nav Component", () => {
    it("renders", () => {
        render(<Nav />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })
});