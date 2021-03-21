# RL ToDo List

## Specs

You have been asked to develop a to-do list application that allows the user to create and manage tasks. The application has the following features:
• Add and view tasks
• Delete a task
• Complete a task
• Set a priority for my tasks
• View the tasks sorted by priority and name
• View the number of total and completed tasks

Instructions

Please provide relevant source code of your implementation and any documentation and additional assumptions that you feel are appropriate. Please use the following information to assist you with completing the challenge successfully:
• The intent of the challenge is to provide us with an opportunity to judge your problem solving, design and development skills. It is important to provide a solution that highlights your skills in these areas.
• Develop the system using latest web technologies.
• Server side code is not required.
• Your solution should be high quality, well annotated, and include tests.
• The simplest solution is often the best

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Data

```
Task: {
  id: number
  content: string
  priority: Priority 
  completed: boolean
}

Priority: highest | high | medium | low | lowest

Tasks: [Task]

TaskStats: {
  total: number
  completed: number
}

createTask: (content, priority) -> Task
updateTask: (id, changes) -> Task
addTask: Task -> Tasks
deleteTask: id -> Tasks
```
