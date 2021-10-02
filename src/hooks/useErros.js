import React, { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  // validar erros para aparecer nos campos, caso o usuário digitar algo errado
  // estadoInicial está pegando qual é o campo que vai ser validado
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    // novoEstado[name]: recebe o que está sendo retornado na função validacoes() no App.js. Onde esse validacoes[name]: o name neste caso vem como cpf
    // [name]: é o nome do atributo que foi definido no TextField
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  // só vai deixar passar para etapa seguinte se todos os campos da validação for valido
  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  // para cada campo vai ter uma validação. Ex: campo de senha, nome e cpf
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }

  return estadoInicial;
}

export default useErros;
