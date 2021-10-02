import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"; // layout pré definidos(utilizados para designs e layouts de componentes como button)

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros'; // é um hooks que eu criei

// aoEnviar: é a função que está sendo passada dentro do FormularioCadastro como propriedade, no componente App.js
// poderia colocar só props em vez de {aoEnviar}, só que qdo for usar lá em baixo deve colocar props.aoEnviar()
function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);
  const [ erros, validarCampos, possoEnviar ] = useErros(validacoes);

  // validar erros para aparecer nos campos, caso o usuário digitar algo errado
  //const [erros, setErros] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" } });

  function handleSubmit(event) {
    event.preventDefault();
    if(possoEnviar()) {
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TextField: seria como colocar um label e um input do tipo texto */}
      <TextField
        id='nome'
        label='Nome'
        name="nome" // para fazer a validação na regra de negócio, para qdo for validar o campo. esse name vai ser pego na função validarCampos
        required // campo obrigatório
        variant='outlined'
        margin='normal'
        fullWidth // para acupar a linha inteira
        error={!erros.nome.valido} // se estiver errado a cor do campo muda
        helperText={erros.nome.texto} // para aparecer o texto do erro
        // onBlur: qdo o foco do campo deixa de ser usado. Ex: qdo eu clico no campo e depois clico em outro campo, ele deixa de ser usado
        onBlur={validarCampos}
        // validação para digitar somente 3 caracter
        // onChange={(event) => {
        //   let tmpNome = event.target.value;
        //   if (tmpNome.length >= 3) {
        //     tmpNome = tmpNome.substr(0, 3);
        //   }
        //   setNome(tmpNome);
        // }}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        value={nome}
      />
      <TextField
        id='sobrenome'
        label='Sobrenome'
        variant='outlined'
        margin='normal'
        fullWidth // para acupar a linha inteira
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        value={sobrenome}
      />
      <TextField
        id='cpf'
        label='CPF'
        name="cpf" // para fazer a validação na regra de negócio, para qdo for validar o campo. esse name vai ser pego na função validarCampos
        required // campo obrigatório
        variant='outlined'
        margin='normal'
        fullWidth // para acupar a linha inteira
        error={!erros.cpf.valido} // se estiver errado a cor do campo muda
        helperText={erros.cpf.texto} // para aparecer o texto do erro
        // onBlur: qdo o foco do campo deixa de ser usado. Ex: qdo eu clico no campo e depois clico em outro campo, ele deixa de ser usado
        onBlur={validarCampos}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        value={cpf}
      />

      {/* Switch: seria como colocar um input do tipo checkbox */}
      {/* FormControlLabel: serve para juntar o label com o Switch */}
      {/* setPromocoes(event.target.checked): tem que ser checked em vez de value, pq é uma propriedade do material-ui */}
      {/* checked: seria como o value */}
      <FormControlLabel
        label='Promoções'
        control={
          <Switch
            name='promocoes'
            // defaultChecked={promocoes}
            color='primary'
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            checked={promocoes}
          />
        }
      />
      <FormControlLabel
        label='Novidades'
        control={
          <Switch
            name='novidades'
            // defaultChecked={novidades}
            color='primary'
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            checked={novidades}
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
