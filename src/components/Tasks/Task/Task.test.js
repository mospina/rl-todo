import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Task from "./index";

describe("Task", () => {
  test("calls event handler with right details for completed", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 1,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(
      <table>
        <tbody>
          <Task task={task} onTaskUpdate={mockHandler} />
        </tbody>
      </table>
    );

    const completed = component.container.querySelector("#completed");

    fireEvent.click(completed)

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.completed).toBe(true);
  });

  test("calls event handler with right details for increment priority", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 2,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(
      <table>
        <tbody>
          <Task task={task} onTaskUpdate={mockHandler} />
        </tbody>
      </table>
    );

    const increment = component.container.querySelector("#increment-priority");

    fireEvent.click(increment)

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.priority).toBe(1);
  });

  test("calls event handler with right details for decrement priority", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 2,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(
      <table>
        <tbody>
          <Task task={task} onTaskUpdate={mockHandler} />
        </tbody>
      </table>
    );

    const decrement = component.container.querySelector("#decrement-priority");

    fireEvent.click(decrement)

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.priority).toBe(3);
  });

  test("calls event handler with right details for delete", () => {
    const task = {
      id: 1,
      content: "test task",
      priority: 2,
      completed: false,
    };

    const mockHandler = jest.fn();

    const component = render(
      <table>
        <tbody>
          <Task task={task} onTaskDelete={mockHandler} />
        </tbody>
      </table>
    );

    const deleteButton = component.container.querySelector("#delete-task");

    fireEvent.click(deleteButton)

    const result = mockHandler.mock.calls[0][0];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result).toBe(task.id);
  });
});
