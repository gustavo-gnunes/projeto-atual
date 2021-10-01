import React from "react";

const ValidacoesCadastro = React.createContext({
  // serve para caso queira usar o FormularioCadastro que está no App.js, fora no ValidacoesCadastro.Provider (com isso não vai usar as validaçoes dos campos)
  cpf: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}

export default ValidacoesCadastro;
