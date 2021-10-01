import React, { useEffect, useState } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    // {aoEnviar}: é a função que está no App.js(onSubmit), que serve para mostrar o dados cadastrados
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant='h5'>Obrigado pelo Cadastro!</Typography>,
  ];

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    // serve para passar pelo array. Conforme for passando, vai mudando de componente e pegando a posição do array seguinte
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      {/* Stepper: mostra quais são as estapas */}
      {/* activeStep: mostra qual etapa está ativa */}
      <Stepper activeStep={etapaAtual}>
        {/* para cada componente(formula´rio, coloca um Step) */}
        {/* Step: desenha um StepLabel */}
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
