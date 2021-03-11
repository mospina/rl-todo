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

    const component = render(
      <table>
        <tbody>
          <Task task={task} onTaskUpdate={mockHandler} />
        </tbody>
      </table>
    );

    const completed = component.container.querySelector(`#completed-${task.id}`);

    fireEvent.click(completed)

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.completed).toBe(true);
  });
})

describe("increment-priority", () => {

  test("calls event handler with right details", () => {
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

    const increment = component.container.querySelector(`#increment-priority-${task.id}`);

    fireEvent.click(increment)

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.priority).toBe(1);
  });

  test("do not call handler when priority is already 1", () => {
    const task = {
      id: 2,
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

    const increment = component.container.querySelector(`#increment-priority-${task.id}`);

    fireEvent.click(increment)

    expect(mockHandler.mock.calls).toHaveLength(0);
  });

})

describe("decrement-priority", () => {
  test("calls event handler with right details", () => {
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

    const decrement = component.container.querySelector(`#decrement-priority-${task.id}`);

    fireEvent.click(decrement)

    const result = mockHandler.mock.calls[0][1];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result.id).toBe(task.id);
    expect(result.priority).toBe(3);
  });

})

describe("delete", () => {
  test("calls event handler with right details", () => {
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

    const deleteButton = component.container.querySelector(`#delete-task-${task.id}`);

    fireEvent.click(deleteButton)

    const result = mockHandler.mock.calls[0][0];
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(result).toBe(task.id);
  });
});
