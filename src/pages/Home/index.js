import React from "react";
import ListTarefa from "../../components/structure/ListTarefas";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Lista de Tarefas</h1>
      <ListTarefa />
    </div>
  );
};

export default Home;
