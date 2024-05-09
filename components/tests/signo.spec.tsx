import { act, fireEvent, render, screen } from "@testing-library/react";
import { SignoProvider } from "../providers/SignoProvider";
import InputDados from "../inputDados";
import Signo from "../signo";

function ComponentesRenderizados() {
  return (
    <SignoProvider>
      <InputDados />
      <Signo titulo="Signo Solar" />
      <Signo titulo="Signo Ascendente" />
    </SignoProvider>
  )
}

function getMensagemSignoSolar(){
  const mensagemSignoSolar = screen.getByText("Insira sua Data de Nascimento");
  return mensagemSignoSolar;
}

function getMensagemSignoAscendente(){
  const mensagemSignoAscendente = screen.getByText("Insira sua Data e Horário de Nascimento");
  return mensagemSignoAscendente;
}

function getSignoSolar(){
  const signoSolar = screen.getByTestId("signoSolar");
  return signoSolar;
}

function getSignoAscendente(){
  const signoAscendente = screen.getByTestId("signoAscendente");
  return signoAscendente;
}

function clicarBotaoGerarSigno(){
  const botao = screen.getByRole("buttonGerarSigno");
  act(() => fireEvent.click(botao));
}

function setValorInputData(){
  const inputData = screen.getByTestId("inputData");
  fireEvent.change(inputData, { target: { value: "2002-01-30" } });
  return inputData;
}

function setValorInputHorario(){
  const inputHorario = screen.getByTestId("inputHorario");
  fireEvent.change(inputHorario, { target: { value: "12:30" } });
  return inputHorario;
}

describe("Signo", () => {
  it("sem signo ao clicar no botao e ambos input vazio", () => {
    render(<ComponentesRenderizados/>)
    const mensagemSignoSolar = getMensagemSignoSolar();
    const mensagemSignoAscendente = getMensagemSignoAscendente();
    clicarBotaoGerarSigno();
    expect(mensagemSignoSolar).toBeInTheDocument();
    expect(mensagemSignoAscendente).toBeInTheDocument();
  })

  it("sem signo ao clicar no botao e apenas input data vazio", () => {
    render(<ComponentesRenderizados/>)
    const mensagemSignoSolar = getMensagemSignoSolar();
    const mensagemSignoAscendente = getMensagemSignoAscendente();
    const inputHorario = setValorInputHorario();
    clicarBotaoGerarSigno();
    expect(inputHorario).toHaveValue("12:30");
    expect(mensagemSignoSolar).toBeInTheDocument();
    expect(mensagemSignoAscendente).toBeInTheDocument();
  })

  it("renderiza apenas signo solar ao clicar no botao e apenas input data com valor", () => {
    render(<ComponentesRenderizados/>)
    const mensagemSignoSolar = getMensagemSignoSolar();
    const mensagemSignoAscendente = getMensagemSignoAscendente();
    const inputData = setValorInputData();
    clicarBotaoGerarSigno();
    const signoSolar = getSignoSolar();
    expect(inputData).toHaveValue("2002-01-30");
    expect(mensagemSignoSolar).not.toBeInTheDocument();
    expect(mensagemSignoAscendente).toBeInTheDocument();
    expect(signoSolar).toBeInTheDocument();
  })

  it("renderiza signo solar e ascendente ao clicar no botao e ambos input com valor", () => {
    render(<ComponentesRenderizados/>)
    const mensagemSignoSolar = getMensagemSignoSolar();
    const mensagemSignoAscendente = getMensagemSignoAscendente();
    const inputData = setValorInputData();
    const inputHorario = setValorInputHorario();
    clicarBotaoGerarSigno();
    const signoSolar = getSignoSolar();
    const signoAscendente = getSignoAscendente();
    expect(inputData).toHaveValue("2002-01-30");
    expect(inputHorario).toHaveValue("12:30");
    expect(mensagemSignoSolar).not.toBeInTheDocument();
    expect(mensagemSignoAscendente).not.toBeInTheDocument();
    expect(signoSolar).toBeInTheDocument();
    expect(signoAscendente).toBeInTheDocument();
  })


})