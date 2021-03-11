import React from "react";

const Stats = ({tasks}: Tasks.StatsProps) => (
  <div>
    <p>tasks: {tasks.length} / completed: {tasks.filter(task => task.completed).length}</p>
  </div>
)

export default Stats
