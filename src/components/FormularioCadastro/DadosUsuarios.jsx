import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuarios({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // validar erros para aparecer nos campos, caso o usuário digitar algo errado
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro);

  function handleSubmit(event) {
    event.preventDefault();
    if(possoEnviar()) {
      aoEnviar({ email, senha });
    }
  }

  // só vai deixar passar para etapa seguinte se todos os campos da validação for valido
  function possoEnviar() {
    for(let campo in erros) {
      if(!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    // novoEstado[name]: recebe o que está sendo retornado na função validacoes() no App.js. Onde esse validacoes[name]: o name neste caso vem como cpf
    // [name]: é o nome do atributo que foi definido no TextField
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='email'
        label='Email'
        type='email'
        name='email'
        required // campo obrigatório
        variant='outlined'
        margin='normal'
        fullWidth
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
      />
      <TextField
        id='senha'
        label='Senha'
        type='password'
        name='senha'
        required // campo obrigatório
        variant='outlined'
        margin='normal'
        fullWidth // para acupar a linha inteira
        error={!erros.senha.valido} // se estiver errado a cor do campo muda
        helperText={erros.senha.texto} // para aparecer o texto do erro
        // onBlur: qdo o foco do campo deixa de ser usado. Ex: qdo eu clico no campo e depois clico em outro campo, ele deixa de ser usado
        onBlur={validarCampos}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        value={senha}
      />
      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;
