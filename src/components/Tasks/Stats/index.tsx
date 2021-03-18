import React from "react";
import styled from "styled-components";

const Stats = ({tasks}: Tasks.StatsProps) => (
  <Totals>
    <p>tasks: {tasks.length} / completed: {tasks.filter(task => task.completed).length}</p>
  </Totals>
)

const Totals = styled.div`
  font-size: 0.75rem;
`

export default Stats
