import React from "react";

const Card = (props) => {
  const tarefa = props.info;
  return (
    <div className="col" key={tarefa._id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{tarefa.titulo}</h5>
          <span className="badge bg-primary">{tarefa.descricao}</span>
          <h6 className="card-title">{tarefa.prioridade}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
