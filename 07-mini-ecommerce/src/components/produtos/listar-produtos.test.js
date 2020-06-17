import React from "react";
import { render } from "@testing-library/react";
import ListarProdutos from "./listar-produtos";

describe("Teste do componente de listagem de produtos", () => {
  it("deve exibir os nomes dos produtos nos cards", () => {
    const { getByTestId } = render(
      <ListarProdutos
        adicionarProduto={() => false}
        exibirMensagem={() => false}
      />
    );

    expect(getByTestId("card1")).toHaveTextContent("Tênis Nike Revolution 5");
    expect(getByTestId("card2")).toHaveTextContent("Tênis de Caminhada Leve");
  });

  it("deve exibir as descrições dos produtos nos cards", () => {
    const { getByTestId } = render(
      <ListarProdutos
        adicionarProduto={() => false}
        exibirMensagem={() => false}
      />
    );

    expect(getByTestId("card1")).toHaveTextContent(
      "Descrição do produto aqui..."
    );
    expect(getByTestId("card3")).toHaveTextContent(
      "Descrição do produto aqui..."
    );
  });

  it("deve exibir os preços dos produtos nos botões de comprar", () => {
    const { getByTestId } = render(
      <ListarProdutos
        adicionarProduto={() => false}
        exibirMensagem={() => false}
      />
    );

    expect(getByTestId("card1")).toHaveTextContent("Comprar (R$ 249,99)");
    expect(getByTestId("card2")).toHaveTextContent("Comprar (R$ 79,90Co)");
  });
});
