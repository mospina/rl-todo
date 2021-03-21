import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders To Do", () => {
  render(<App />);
  const element = screen.getByText(/To Do/i);
  expect(element).toBeInTheDocument();
});
