import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    aoEnviar({ cep, endereco, numero, estado, cidade });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='cep'
        label='CEP'
        type='number'
        variant='outlined'
        margin='normal'
        onChange={(event) => {
          setCep(event.target.value);
        }}
        value={cep}
      />
      <TextField
        id='endereco'
        label='Endereço'
        type='text'
        variant='outlined'
        margin='normal'
        fullWidth // para acupar a linha inteira
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        value={endereco}
      />
      <TextField
        id='numero'
        label='Numero'
        type='number'
        variant='outlined'
        margin='normal'
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        value={numero}
      />
      <TextField
        id='estado'
        label='Estado'
        type='text'
        variant='outlined'
        margin='normal'
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        value={estado}
      />
      <TextField
        id='cidade'
        label='Cidade'
        type='text'
        variant='outlined'
        margin='normal'
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        value={cidade}
      />

      <Button type='submit' variant='contained' color='primary' fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
