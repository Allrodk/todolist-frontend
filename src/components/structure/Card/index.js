import React from "react";
import "./index.css";

const Card = (props) => {
  const tarefa = props.data;

  //Ajusta data para dd-mm-aaaa
  let dataInicio = formatData(tarefa.dataCriacao);
  function formatData(formatada) {
    const dataAtual = new Date(formatada);
    const ano = dataAtual.getFullYear();
    let mes = digito2(dataAtual.getMonth() + 1);
    let dia = digito2(dataAtual.getDate() + 1);
    formatada = `${dia}-${mes}-${ano}`;
    return formatada;
  }
  function digito2(digito) {
    if (digito < 10) {
      digito = `0${digito}`;
    }
    return digito;
  }

  return (
    <div className="card-body" key={tarefa._id}>
      <h5 className="card-title">{tarefa.titulo}</h5>
      <div className="card-group">
        <div className="card-element">Descrição: {tarefa.descricao}</div>
        <div className="card-element">Prioridade: {tarefa.prioridade}</div>
        <div className="card-element">Status: {tarefa.status}</div>
        <div className="card-element">Prazo: {tarefa.prazo} dias</div>
        <div className="card-element">Início: {dataInicio}</div>
      </div>
    </div>
  );
};

export default Card;
