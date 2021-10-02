import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros'; // é um hooks que eu criei

function DadosUsuarios({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesCadastro);
  const [ erros, validarCampos, possoEnviar ] = useErros(validacoes);

  function handleSubmit(event) {
    event.preventDefault();
    if(possoEnviar()) {
      aoEnviar({ email, senha });
    }
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
