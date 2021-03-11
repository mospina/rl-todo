declare namespace Tasks {
  type Task = {
    id: number;
    content: string;
    priority: number; // Positive Integer [1..). The lowest the number the highest the priority
    completed: boolean;
  };

  type Tasks = Task[];

  type TaskStats = {
    total: number;
    completed: number;
  };

  type StatsProps = {
    tasks: Tasks
  }

  type ListProps = {
    tasks: Tasks;
    onTaskUpdate: (i: number, c: Task) => void;
    onTaskDelete: (i: number) => void;
  };

  type TaskProps = {
    task: Task;
    onTaskUpdate: (i: number, c: Task) => void;
    onTaskDelete: (i: number) => void;
  };

  type CreateTaskInput = {
    content: string;
    priority: number;
  };

  type FormProps = {
    onSubmit: (i: CreateTaskInput) => void;
  };
}
