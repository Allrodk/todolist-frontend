import React, { useState, useEffect } from "react";
import Card from "../Card";

// Ele vai fazer uma requisicao para a API(/musicas) e vai listar em varios card.
const ListTarefa = () => {
  // estado - memoria do componente
  const [tarefas, setTarefas] = useState([]);
  // const [count, setCount] = useState(0);

  // UseEffect
  // criar o componente ou quando o componete ou o estado tem uma atualizacao.
  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {
    // const request = await fetch('http://localhost:3001')
    const request = await fetch(`${process.env.REACT_APP_BACKEND}`);
    // data = recebe os dados da api (musicas).
    const info = await request.json();
    // atualizo meu estado em memoria com as musicas - para atualizar no DOM.
    setTarefas(info);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      {/* <button onClick={handleButton}>Incrementa</button>
      <p>{count}</p> */}
      {tarefas.map((tarefa) => (
        <Card info={tarefa} key={tarefa._id} />
      ))}
    </div>
  );
};

export default ListTarefa;
