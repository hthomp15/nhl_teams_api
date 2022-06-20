import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


describe("Summary Component", () => {
    it("renders", () => {
        render(<Summary />);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Summary />);
        expect(asFragment()).toMatchSnapshot();
    })
});
