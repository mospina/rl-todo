import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Form from "./index";

describe("Form", () => {
  test("calls event handler with right details", () => {
    const task = {
      content: "test task",
      priority: 1,
    };

    const mockHandler = jest.fn();

    const component = render(<Form onSubmit={mockHandler} />);

    const form = component.container.querySelector("form");
    const content = component.container.querySelector("#content");
    const priority = component.container.querySelector("#priority");

    fireEvent.change(content, {
      target: { value: task.content },
    });
    fireEvent.change(priority, {
      target: { value: task.priority },
    });

    fireEvent.submit(form);

    const result = mockHandler.mock.calls[0][0];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.content).toBe(task.content);
    expect(result.priority).toBe(task.priority);
  });
});
