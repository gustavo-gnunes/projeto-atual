import React, { Component } from "react";
import "./App.css";
import "fontsource-roboto"; // em vez de pegar a fonte do googlefonts, da para instalar a fonte com yarn add fontsourc-roboto

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { validarCPF, validarSenha } from "./models/Cadastro";

import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      // Container: seria como colocar uma tag igual a article
      <Container component='article' maxWidth='sm'>
        {/* Typography: seria como colocar um h1, h2..., vai depender o que for colocado na variante */}
        {/* variante: o tamanho da escrita(size) vai ser como se fosse um h3, mas o componente(a tag) é um h1 */}
        <Typography variant='h3' component='h1' align='center'>
          Formulário de cadastro
        </Typography>

        {/* para o campo que tem no cpf, usa a função validarCPF. Para o campo que tem nome senha, usa a função validarSenha */}
        {/* dá para associar um determinado campo com uma determinada função */}
        {/* nome:validarSenha: usei o mesmo validarSenha para validar senha e nome, pois é uma string */}
        {/* deve deixar dentro do ValidacoesCadastro.Provider, todos os componentes que precisam usar a informação que está no value */}
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
