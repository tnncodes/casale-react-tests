import React from "react";
import { render } from "@testing-library/react";
import ItensCarrinhoMenu from "./itens-carrinho-menu";

describe("Teste do componente de itens do carrinho do menu", () => {
  if (
    ("deve renderizar o carrinho vazio",
    () => {
      const { getByTestId } = render(<ItensCarrinhoMenu produtos={[]} />);
      expect(getByTestId("itens")).toHaveTextContent("Carrinho vazio...");
    })
  );

  it("deve renderizar o carrinho com um produto", () => {
    const produtos = [
      { nome: "Tênis Nike Revolution 5", preco: "R$ 249,99", quantidade: 1 },
    ];
    const { getByTestId } = render(<ItensCarrinhoMenu produtos={produtos} />);
    expect(getByTestId(produtos[0].nome)).toHaveTextContent(
      "Tênis Nike Revolution 5 - 1 x R$ 249,99"
    );
  });

  it("deve renderizar o carrinho com múltiplos produtos", () => {
    const produtos = [
      { nome: "Tênis Nike Revolution 5", preco: "R$ 249,99", quantidade: 1 },
      { nome: "Tênis de Caminhada Leve", preco: "R$ 79,90", quantidade: 2 },
    ];

    const { getByTestId } = render(<ItensCarrinhoMenu produtos={produtos} />);
    expect(getByTestId(produtos[0].nome)).toHaveTextContent(
      "Tênis Nike Revolution 5 - 1 x R$ 249,99"
    );
    expect(getByTestId(produtos[1].nome)).toHaveTextContent(
      "Tênis de Caminhada Leve - 2 x R$ 79,90"
    );
  });
});
