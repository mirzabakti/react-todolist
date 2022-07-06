import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar React State!"
    },
    {
      text: "Belajar React Props!"
    },
    {
      text: "Belajar React Hooks!"
    },
    {
      text: "Belajar React Router!"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar React State!"
    },
    {
      text: "Belajar React Props!"
    },
    {
      text: "Belajar React Hooks!"
    },
    {
      text: "Belajar React Router!"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
