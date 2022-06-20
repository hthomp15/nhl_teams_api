import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import AllTeamsTable from ".."; 

describe ("AllTeamsTable Component", () => {
    it("renders", () => {
        render(<AllTeamsTable />);
    });
});