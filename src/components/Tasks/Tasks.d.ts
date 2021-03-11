declare namespace Tasks {
  type Task = {
    id: number
    content: string
    priority: number // Positive Integer [1..). The lowest the number the highest the priority
    completed: boolean
  }  

  type Tasks = Task[]

  type TaskStats = {
    total: number
    completed: number
  }

  type ListProps = {
    tasks: Tasks
  }

  type TaskProps = {
    task: Task
  }

  type CreateTaskInput = {
    content: string
    priority: number
  }

  type FormProps = {
    onSubmit: (i: CreateTaskInput) => void
  }
}
