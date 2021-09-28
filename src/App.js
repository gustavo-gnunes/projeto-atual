import React, { Component } from "react";
import "./App.css";
import 'fontsource-roboto'; // em vez de pegar a fonte do googlefonts, da para instalar a fonte com yarn add fontsourc-roboto

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from '@material-ui/core';
import { flushSync } from "react-dom";

class App extends Component {
  render() {
    return (
      // Container: seria como coloacr uma tag igual a article
      <Container component="article" maxWidth="sm">
        {/* Typography: seria como colocar um h1, h2..., vai depender o que for colocado na variante */}
        {/* variante: o tamanho da escrita vai ser como se fosse um h3, mas o componente(a tag) é um h1 */}
        <Typography variante="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={onSubmit} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }
  return {valido:true, texto:""}
}


export default App;
