import React from "react";
import placeholder from "../../imagens/shoes.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ListarProdutos() {
  const produtos = [
    { nome: "Tênis Nike Revolution 5", preco: "R$ 249,99" },
    { nome: "Tênis de Caminhada Leve", preco: "R$ 79,90" },
    { nome: "Tênis Adidas Lite Racer", preco: "R$ 169,99" },
    { nome: "Tênis Nike Shox Nz", preco: "R$ 549,99" },
    { nome: "Tênis Nike Reax 8 TR", preco: "R$ 269,99" },
    { nome: "Tênis Couro Nike Court Royale", preco: "R$ 169,99" },
    { nome: "Tênis Nike Precision IV", preco: "329,99" },
    { nome: "Tênis Nike Shox Nz", preco: "R$ 699,99" },
  ];

  function handleComprar(event, produto) {
    event.preventDefault();

    // adicionar o produto

    // exibir mensagem
  }

  function render() {
    let key = 1;

    const cards = produtos.map((produto) => (
      <Card
        key={key}
        data-testid={"card" + key++}
        style={{ width: "18rem", margin: "10px", float: "left" }}
      >
        <Card.Img variant="top" src={placeholder} />

        <Card.Body className="text-center">
          <Card.Title style={{ height: "40px" }}>{produto.nome}</Card.Title>

          <Card.Text>Descrição do produto aqui...</Card.Text>

          <Button
            variant="success"
            style={{ width: "100%" }}
            onClick={(event) => handleComprar(event, produto)}
          >
            Comprar ({produto.preco})
          </Button>
        </Card.Body>
      </Card>
    ));

    return cards;
  }

  return render();
}

export default ListarProdutos;
