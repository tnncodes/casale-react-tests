import React from "react";
import { render } from "@testing-library/react";
import Menu from "./menu";

describe("Teste do componente de menu", () => {
  it("deve renderizar o componente sem erros", () => {
    const { getByText } = render(
      <Menu
        produtos={[]}
        handleExibirCheckout={() => false}
        handleExibirProdutos={() => false}
      />
    );
    const texto = getByText(/mini ecommerce/i);
    expect(texto).toBeInTheDocument();
  });
});
