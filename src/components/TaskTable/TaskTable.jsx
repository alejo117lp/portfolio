import React from "react";
import "./TaskTable.css";

const TaskTable = ({ tasks, title, header1, header2 }) => {
  return (
    <section className="task-table">
      <h3 className="feature-2">{title}</h3>
      {tasks && tasks.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>{header1}</th>
              <th>{header2}</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </section>
  );
};

export default TaskTable;
