import React, { useState, useEffect } from "react";
import Api from "../../Api";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

const Editar = () => {
  const navigate = useNavigate();

  const [tarefa, setTarefa] = useState({
    titulo: "",
    descricao: "",
    prioridade: "",
    status: "",
    prazo: "",
    dataCriacao: "",
  });

  useEffect(() => {
    getTarefaById();
  }, []);

  const { id } = useParams();

  //buscar a tarefa por id;
  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    tarefa.dataCriacao = formatData(tarefa.dataCriacao);
    setTarefa(tarefa);
  };

  function formatData(formatada) {
    const dataAtual = new Date(formatada);
    const ano = dataAtual.getFullYear();
    let mes = digito2(dataAtual.getMonth() + 1);
    let dia = digito2(dataAtual.getDate() + 1);
    formatada = `${ano}-${mes}-${dia}`;
    return formatada;
  }

  function digito2(digito) {
    if (digito < 10) {
      digito = `0${digito}`;
    }
    return digito;
  }

  const handleFieldsChange = (evento) => {
    const tarefaEditar = { ...tarefa };
    tarefaEditar[evento.target.name] = evento.target.value;
    console.log(tarefaEditar);
    setTarefa(tarefaEditar);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/detalhes/${id}`);
  };

  function Voltar() {
    navigate(`/detalhes/${tarefa._id}`);
  }

  return (
    <div className="row">
         <h1 className="text-center mt-3">Editar Tarefa</h1>
      <div className="row-cols-1 row-cols-md-2 offset-md-3">
        <div className="card-body">          
          <form onSubmit={handleSubmit} className="card-group-edit">
            <div className="card-element">
              <label htmlFor="titulo">Título da tarefa:</label>
              <input
                id="titulo"
                type="text"
                placeholder="Título da tarefa"
                name="titulo"
                value={tarefa.titulo}
                onChange={handleFieldsChange}
              />
            </div>
            <div className="card-element">
              <label htmlFor="descricao">Descricao da tarefa:</label>
              <input
                id="descricao"
                type="text"
                placeholder="Descricao da tarefa"
                name="descricao"
                value={tarefa.descricao}
                onChange={handleFieldsChange}
              />
            </div>
            <div className="card-element">
              <label htmlFor="prioridade">Prioridade da tarefa:</label>
              <select
                name="prioridade"
                id="prioridade"
                value={tarefa.prioridade}
                onChange={handleFieldsChange}
              >
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="baixa">Alta</option>
              </select>
            </div>
            <div className="card-element">
              <label htmlFor="status">Status da tarefa:</label>
              <select
                name="status"
                id="status"
                value={tarefa.status}
                onChange={handleFieldsChange}
              >
                <option value="fazer">Fazer</option>
                <option value="fazendo">Fazendo</option>
                <option value="feito">Feito</option>
              </select>
            </div>
            <div className="card-element">
              <label htmlFor="prazo">Prazo da tarefa em dias:</label>
              <input
                id="prazo"
                type="Number"
                step="1"
                placeholder="Prazo da tarefa em dias"
                name="prazo"
                value={tarefa.prazo}
                onChange={handleFieldsChange}
              />
            </div>
            <div className="card-element">
              <label htmlFor="dataCriacao">Início da tarefa: </label>
              <input
                id="dataCriacao"
                type="Date"
                step="1"
                placeholder="Início da tarefa"
                name="dataCriacao"
                value={tarefa.dataCriacao}
                onChange={handleFieldsChange}
              />
            </div>
            <div className="card-element">
              <div>
                <button type="submit" className="btn btn-success">
                  Editar
                </button>
                <button
                  type="button"
                  onClick={Voltar}
                  className="btn btn-danger"
                >
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editar;
