import React, { useState, useEffect } from "react";
import Card from "../Card";
import Api from "../../../Api";
import { Link } from 'react-router-dom';

const ListTarefa = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {   
    const request = await Api.fetchGetAll();   
    const data = await request.json();
    setTarefas(data);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {tarefas.map((tarefa) => (
        <Link to={`/detalhes/${tarefa._id}`} className="col" key={tarefa._id}>
          <Card data={tarefa} key={tarefa._id} />
        </Link>
      ))}
    </div>
  );
};

export default ListTarefa;
