import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"; // layout pré definidos(utilizados para designs e layouts de componentes como button)

// aoEnviar: é a função que está sendo passada dentro do FormularioCadastro como propriedade, no componente App.js
// poderia colocar só props em vez de {aoEnviar}, só que qdo for usar lá em baixo deve colocar props.aoEnviar()
function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  // validar erros para aparecer nos campos, caso o usuário digitar algo errado
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  function handleSubmit(event) {
    event.preventDefault();
    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    // console.log({nome, sobrenome, cpf, promocoes, novidades});
  }

  function validandoCPF() {
    // ehValido: recebe o que está sendo retornado na função validarCPF(cpf) no App.js
    const ehValido = validarCPF(cpf);
    setErros({cpf:ehValido});
    // ou assim
    // setErros({cpf:{valido:ehValido.valido, texto:ehValido.texto}});
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TextField: seria como colocar um label e um input do tipo texto */}
      <TextField
        id='nome'
        label='Nome'
        variant='outlined'
        margin='normal'
        fullWidth
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
        fullWidth
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        value={sobrenome}
      />
      <TextField
        id='cpf'
        label='CPF'
        variant='outlined'
        margin='normal'
        fullWidth
        error={!erros.cpf.valido} // se estiver errado a cor do campo muda
        helperText={erros.cpf.texto} // para aparecer o texto do erro
        // onBlur: qdo o foco do campo deixa de ser usado. Ex: qdo eu clico no campo e depois clico em outro campo, ele deixa de ser usado
        onBlur={validandoCPF} 
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
