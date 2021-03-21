import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Task from "./index";

describe("completed", () => {
  test("calls event handler with right details", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 1,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(<Task task={task} onTaskUpdate={mockHandler} />);

    const completed = component.container.querySelector(
      `#completed-${task.id}`
    );

    fireEvent.click(completed);

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.completed).toBe(true);
  });
});

describe("priority-change", () => {
  test("calls event handler with right details", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 2,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(<Task task={task} onTaskUpdate={mockHandler} />);

    const priority = component.container.querySelector(
      `#change-priority-${task.id}`
    );

    fireEvent.change(priority, { target: { value: 3 } });

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.priority).toBe(3);
  });
});

describe("delete", () => {
  test("calls event handler with right details", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 2,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(<Task task={task} onTaskDelete={mockHandler} />);

    const deleteButton = component.container.querySelector(
      `#delete-task-${task.id}`
    );

    fireEvent.click(deleteButton);

    const result = mockHandler.mock.calls[0][0];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result).toBe(task.id);
  });
});
