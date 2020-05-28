import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
  const [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO,
  ] = CalculadoraService();

  it('deve garantir que 1 + 4 = 5', () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
    let subtracao = calcular(1, 4, SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('deve garantir que 6 / 2 = 3', () => {
    let divisao = calcular(6, 2, DIVISAO);
    expect(divisao).toEqual(3);
  });

  it('deve garantir que 2 / 3 = 6', () => {
    let multiplicacao = calcular(2, 3, MULTIPLICACAO);
    expect(multiplicacao).toEqual(6);
  });

  it('deve retornar 0 para operação inválida', () => {
    let operacaoInvalida = calcular(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  });
});
