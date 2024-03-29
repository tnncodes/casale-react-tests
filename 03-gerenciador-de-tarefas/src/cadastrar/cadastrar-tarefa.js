import React, { useState } from "react";
import { Button, Form, Jumbotron, Modal } from "react-bootstrap";
import { navigate, A } from "hookrouter";
import Tarefa from "../models/tarefa.models";

function CadastrarTarefa() {
  const [tarefa, setTarefa] = useState("");
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  function cadastrar(event) {
    event.preventDefault();

    setFormValidado(true);

    if (event.currentTarget.checkValidity() === true) {
      // obtem as tarefas
      const tarefasDb = localStorage["tarefas"];
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];

      // persistir a tarefa
      tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
      localStorage["tarefas"] = JSON.stringify(tarefas);
      setExibirModal(true);
    }
  }

  function handleTxtTarefa(event) {
    setTarefa(event.target.value);
  }

  function handleFecharModal() {
    navigate("/");
  }

  return (
    <>
      <h3 className="text-center">Cadastrar</h3>
      <Jumbotron>
        <Form validated={formValidado} noValidate onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}
              data-testid="txt-tarefa"
            />

            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="text-center">
            <Button variant="success" type="submit" data-testid="btn-cadastrar">
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">
              Voltar
            </A>
          </Form.Group>
        </Form>

        <Modal
          show={exibirModal}
          onHide={handleFecharModal}
          data-testid="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>

          <Modal.Body>Tarefa adicionada com sucesso!</Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </>
  );
}

export default CadastrarTarefa;
