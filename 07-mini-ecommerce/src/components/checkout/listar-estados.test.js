import React from "react";
import { render, getAllByTestId } from "@testing-library/react";
import ListarEstados from "./listar-estados";

describe("Teste do componente de listagem de estados", () => {
  it("deve gerar uma listagem de estados", () => {
    const { getByTestId } = render(<ListarEstados />);
    expect(getByTestId("AM")).toHaveTextContent("Amazonas");
    expect(getByTestId("SP")).toHaveTextContent("São Paulo");
  });
});
