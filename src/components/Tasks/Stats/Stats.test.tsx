import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Stats from "./index";

describe("Stats", () => {
  test("display correct stats", () => {
    const tasks = [{
      id: 1,
      content: "task 1",
      priority: 1,
      completed: false
    }, {
      id: 2,
      content: "task 2",
      priority: 4,
      completed: true
    }, {
      id: 3,
      content: "task 3",
      priority: 3,
      completed: true
    }]

    const component = render(<Stats tasks={tasks} />);

    expect(component.container).toHaveTextContent("tasks: 3 / completed: 2");
  })
})

