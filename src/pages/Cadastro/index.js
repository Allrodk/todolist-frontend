import React from "react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // target = quem disparou o evento
    console.log(evento.target);
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;
    const dataCriacao = evento.target.dataCriacao.value;

    const tarefa = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
      dataCriacao,
    };

    const request = await Api.fetchPost(tarefa);
    if (request.status === 500) {
      alert("Todos os campos devem ser preenchidos!");
    } else {
      const result = await request.json();
      if (result.error) {
        console.log(result.error);
      } else {
        alert(result.message);
        navigate("/");
      }
    }
  };

  const dataAtual = formatData(new Date());

  function formatData(formatada) {
    const dataAtual = new Date(formatada);
    const ano = dataAtual.getFullYear();
    let mes = digito2(dataAtual.getMonth() + 1);
    let dia = digito2(dataAtual.getDate());
    formatada = `${ano}-${mes}-${dia}`;
    return formatada;
  }

  function digito2(digito) {
    if (digito < 10) {
      digito = `0${digito}`;
    }
    return digito;
  }

  function Voltar() {
    navigate("/");
  }

  return (
    <div className="row">
      <h1 className="text-center mt-3">Cadastro de Nova Tarefa</h1>
      <div className="row-cols-1 row-cols-md-2 offset-md-3">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="card-group-cad">
            <div className="card-element">
              <label htmlFor="titulo">Título da tarefa:</label>
              <input
                id="titulo"
                type="text"
                placeholder="Título da tarefa"
                name="titulo"
              />
            </div>
            <div className="card-element">
              <label htmlFor="descricao">Descricao da tarefa:</label>
              <input
                id="descricao"
                type="text"
                placeholder="Descricao da tarefa"
                name="descricao"
              />
            </div>
            <div className="card-element">
              <label htmlFor="prioridade">Prioridade da tarefa:</label>
              <select name="prioridade" id="prioridade">
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="baixa">Alta</option>
              </select>
            </div>
            <div className="card-element">
              <label htmlFor="status">Status da tarefa:</label>
              <select name="status" id="status">
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
                defaultValue={dataAtual}
              />
            </div>
            <div className="card-element">
              <div>
                <button type="submit" className="btn btn-success">
                  Cadastrar
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

export default Cadastro;
