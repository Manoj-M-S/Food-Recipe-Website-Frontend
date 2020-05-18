import React from "react";
import { render } from "@testing-library/react";
import Base from "./components/Base";

test("renders learn react link", () => {
  const { getByText } = render(<Base />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
