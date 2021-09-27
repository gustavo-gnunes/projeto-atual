import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"; // layout pré definidos(utilizados para designs e layouts de componentes como button)

function FormularioCadastro() {
  return (
    <form>
      {/* TextField: seria como colocar um label e um input do tipo texto */}
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* Switch: seria como colocar um input do tipo checkbox */}
      {/* FormControlLabel: serve para juntar o label com o Switch */}
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
