"use client"

import { StaticImageData } from 'next/image';
import { ReactNode, createContext, useState } from 'react';
import imgAquario from "@/public/imgs/aquario.jpg";
import imgPeixes from "@/public/imgs/peixes.jpg";
import imgAries from "@/public/imgs/aries.jpg";
import imgTouro from "@/public/imgs/touro.jpg";
import imgGemeos from "@/public/imgs/gemeos.jpg";
import imgCancer from "@/public/imgs/cancer.jpg";
import imgLeao from "@/public/imgs/leao.jpg";
import imgVirgem from "@/public/imgs/virgem.jpg";
import imgLibra from "@/public/imgs/libra.jpg";
import imgEscorpiao from "@/public/imgs/escorpiao.jpg";
import imgSagitario from "@/public/imgs/sagitario.jpg";
import imgCapricornio from "@/public/imgs/capricornio.jpeg";

type TSignoSolar = {
  nome: string;
  dataInicio: string;
  dataFim: string;
  imagem: StaticImageData;
  ascendente: TSignoAscendente[];
}

type TSignoAscendente = {
  nome: string;
  horarioInicio: string;
  horarioFim: string;
  imagem: StaticImageData;
}

interface ISignoProps {
  signoSolar: TSignoSolar | undefined;
  signoAscendente: TSignoAscendente | undefined;
  setarSigno: (data: string, horario: string) => void;
}

interface IProvidersProps {
  children: ReactNode;
}

const SignoContext = createContext<ISignoProps | null>(null);

export function SignoProvider({ children }: IProvidersProps) {
  const [signoSolar, setSignoSolar] = useState<TSignoSolar | undefined>();
  const [signoAscendente, setSignoAscendente] = useState<TSignoAscendente | undefined>();
  const signos = [
    { nome: "Aquário", dataInicio: "20-01", dataFim: "18-02", imagem: imgAquario, ascendente: [
      { nome: "Sagitário", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgSagitario},
      { nome: "Capricórnio", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgCapricornio},
      { nome: "Aquário", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgEscorpiao },
    ]},
    { nome: "Peixes", dataInicio: "19-02", dataFim: "20-03", imagem: imgPeixes, ascendente: [
      { nome: "Capricórnio", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgCapricornio},
      { nome: "Aquário", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgAquario},
      { nome: "Peixes", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgSagitario },
    ]},
    { nome: "Áries", dataInicio: "21-03", dataFim: "19-04", imagem: imgAries, ascendente: [
      { nome: "Aquário", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgAquario},
      { nome: "Peixes", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgPeixes},
      { nome: "Áries", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgCapricornio },
    ]},
    { nome: "Touro", dataInicio: "20-04", dataFim: "20-05", imagem: imgTouro, ascendente: [
      { nome: "Peixes", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgPeixes},
      { nome: "Áries", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgAries},
      { nome: "Touro", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgAquario },
    ]},
    { nome: "Gêmeos", dataInicio: "21-05", dataFim: "20-06", imagem: imgGemeos, ascendente: [
      { nome: "Áries", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgAries},
      { nome: "Touro", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgTouro},
      { nome: "Gêmeos", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgPeixes },
    ]},
    { nome: "Câncer", dataInicio: "21-06", dataFim: "22-07", imagem: imgCancer, ascendente: [
      { nome: "Touro", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgTouro},
      { nome: "Gêmeos", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgGemeos},
      { nome: "Câncer", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgAries },
    ]},
    { nome: "Leão", dataInicio: "23-07", dataFim: "22-08", imagem: imgLeao, ascendente: [
      { nome: "Gêmeos", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgGemeos},
      { nome: "Câncer", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgCancer},
      { nome: "Leão", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgTouro },
    ]},
    { nome: "Virgem", dataInicio: "23-08", dataFim: "22-09", imagem: imgVirgem, ascendente: [
      { nome: "Câncer", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgCancer},
      { nome: "Leão", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgLeao},
      { nome: "Virgem", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgGemeos },
    ]},
    { nome: "Libra", dataInicio: "23-09", dataFim: "22-10", imagem: imgLibra, ascendente: [
      { nome: "Leão", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgLeao},
      { nome: "Virgem", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgVirgem},
      { nome: "Libra", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgLibra },
      { nome: "Escorpião", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgCancer },
    ]},
    { nome: "Escorpião", dataInicio: "23-10", dataFim: "21-11", imagem: imgEscorpiao, ascendente: [
      { nome: "Virgem", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgVirgem},
      { nome: "Libra", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgLibra},
      { nome: "Escorpião", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgEscorpiao },
      { nome: "Sagitário", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgLeao },
    ]},
    { nome: "Sagitário", dataInicio: "22-11", dataFim: "21-12", imagem: imgSagitario, ascendente: [
      { nome: "Libra", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgLibra},
      { nome: "Escorpião", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgEscorpiao},
      { nome: "Sagitário", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgSagitario },
      { nome: "Capricórnio", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgVirgem },
    ]},
    { nome: "Capricórnio", dataInicio: "22-12", dataFim: "19-01", imagem: imgCapricornio, ascendente: [
      { nome: "Escorpião", horarioInicio: "00:31", horarioFim: "02:30", imagem: imgEscorpiao},
      { nome: "Sagitário", horarioInicio: "02:31", horarioFim: "04:30", imagem: imgSagitario},
      { nome: "Capricórnio", horarioInicio: "04:31", horarioFim: "06:30", imagem: imgCapricornio },
      { nome: "Aquário", horarioInicio: "06:31", horarioFim: "08:30", imagem: imgAquario },
      { nome: "Peixes", horarioInicio: "08:31", horarioFim: "10:30", imagem: imgPeixes },
      { nome: "Áries", horarioInicio: "10:31", horarioFim: "12:30", imagem: imgAries },
      { nome: "Touro", horarioInicio: "12:31", horarioFim: "14:30", imagem: imgTouro },
      { nome: "Gêmeos", horarioInicio: "14:31", horarioFim: "16:30", imagem: imgGemeos },
      { nome: "Câncer", horarioInicio: "16:31", horarioFim: "18:30", imagem: imgCancer },
      { nome: "Leão", horarioInicio: "18:31", horarioFim: "20:30", imagem: imgLeao },
      { nome: "Virgem", horarioInicio: "20:31", horarioFim: "22:30", imagem: imgVirgem },
      { nome: "Libra", horarioInicio: "22:31", horarioFim: "00:30", imagem: imgLibra },
    ]},
  ]
  
  function comparaData(dataInput: any, dataSigno: any) {
    const partesDataInput = dataInput.split('-');
    const partesDataSigno = dataSigno.split('-');

    const ano = partesDataInput[0];

    const diaInput = partesDataInput[2];
    const mesInput = partesDataInput[1] - 1;

    const diaSigno = partesDataSigno[0];
    const mesSigno = partesDataSigno[1] - 1;

    dataInput = new Date(ano, mesInput, diaInput);
    dataSigno = new Date(ano, mesSigno, diaSigno);

    return dataInput >= dataSigno ? true : false;
  }

  function verificaSignoSolar(data: string){
    for (let i = signos.length - 1; i >= 0; i--) {
      if (comparaData(data, signos[i].dataInicio)) {
        return signos[i];
      }
    }
    return undefined;
  }

  function comparaHorario(horarioInput: string, horarioInicioSigno: string){
    horarioInput = horarioInput.replace(":", ".");
    horarioInicioSigno = horarioInicioSigno.replace(":", ".");

    const horarioInputNumero = Number(horarioInput)
    const horarioInicioSignoNumero = Number(horarioInicioSigno);

    return horarioInputNumero >= horarioInicioSignoNumero ? true : false;
  }
  
  function verificaSignoAscendente(horario: string, signoSolar: TSignoSolar){
    for (let i = signoSolar.ascendente.length - 1; i >= 0; i--) {
      if (comparaHorario(horario, signoSolar.ascendente[i].horarioInicio)) {
        return signoSolar.ascendente[i];
      }
    }
    return undefined;
  }

  function setarSigno(data: string, horario: string) {
    if(data === null || data === undefined || data === ""){
      return;
    }
    let signoSolar = verificaSignoSolar(data);
    if(signoSolar !== undefined){
      setSignoSolar(signoSolar);
    }
    else{
      signoSolar = signos[signos.length - 1];
      setSignoSolar(signoSolar);
    }
    if(horario === null || horario === undefined || horario === ""){
      return;
    }
    let signoAscendente = verificaSignoAscendente(horario, signoSolar);
    if(signoAscendente !== undefined){
      setSignoAscendente(signoAscendente);
    }
    else{
      signoAscendente = signoSolar.ascendente[signoSolar.ascendente.length - 1];
      setSignoAscendente(signoAscendente);
    }

  }
  return (
    <SignoContext.Provider value={{ signoSolar, signoAscendente, setarSigno }}>
      {children}
    </SignoContext.Provider>
  )
}

export default SignoContext;