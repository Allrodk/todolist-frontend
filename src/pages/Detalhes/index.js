import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Api from "../../Api";
import Card from "../../components/structure/Card";

const Detalhes = () => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // funcoes de abertura e fechamento do modal
  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getTarefaById();
  }, []);

  const { id } = useParams();
  console.log(id);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if (data.message) {
      console.log("excluido", data.message);
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
         <h1 className="text-center mt-3">Detalhes da Tarefa</h1>
      <div className="row">
        <div className="row-cols-1 row-cols-md-2 offset-md-3">
          <Card data={tarefa} key={tarefa._id} />
          <div className="btn row-cols-1 row-cols-md-2">
            <Link to={`/editar/${tarefa._id}`} className="btn btn-info">
              Editar
            </Link>
            <button className="btn btn-danger" onClick={AbreModal}>
              Excluir
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>
            Não
          </button>
          <button className="btn btn-success" onClick={handleDelete}>
            Sim
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Detalhes;
