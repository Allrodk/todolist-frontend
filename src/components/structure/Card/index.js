import React from "react";
import "./index.css";

const Card = (props) => {
  const tarefa = props.info;
  return (
    <div className="col" key={tarefa._id}>      
        <div className="card-body">
          <h5 className="card-title">Título: {tarefa.titulo}</h5>
          <div className="card-group">
            <div className="card-element">Descrição:  {tarefa.descricao}</div>
            <div className="card-element">Prioridade: {tarefa.prioridade}</div>
            <div className="card-element">Status:     {tarefa.status}</div>
            <div className="card-element">Prazo: {tarefa.prazo} dias</div>
            <div className="card-element">Início: {tarefa.dataCriacao}</div>
          </div>
        </div>     
    </div>
  );
};

export default Card;
