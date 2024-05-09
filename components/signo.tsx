"use client"

import Image from "next/image";
import { useContext } from "react";
import SignoContext from "./providers/SignoProvider";

interface ISignoProps {
  titulo: "Signo Solar" | "Signo Ascendente";
}

export default function Signo({ titulo }: ISignoProps) {
  const signoContext = useContext(SignoContext);

  return (
    titulo === "Signo Solar" ?
      signoContext?.signoSolar ?
        <article data-testid="signoSolar">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="mb-6 text-4xl text-center underline">{titulo}</h2>
            <h3 className="text-3xl text-center">{signoContext?.signoSolar?.nome}</h3>
            <Image width={200} height={200} src={signoContext?.signoSolar?.imagem} alt="Imagem do Signo" className="w-[200px] h-[200px]" />
            <p className="text-2xl text-center">{signoContext.signoSolar.dataInicio.replace("-", "/")} - {signoContext.signoSolar.dataFim.replace("-", "/")}</p>
          </div>
        </article>
        :
        <span className="h-[356px] flex justify-center items-center text-lg">Insira sua Data de Nascimento</span>
      :
      signoContext?.signoAscendente ?
        <article data-testid="signoAscendente">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="mb-6 text-4xl text-center underline">{titulo}</h2>
            <h3 className="text-3xl text-center">{signoContext?.signoAscendente?.nome}</h3>
            <Image width={200} height={200} src={signoContext?.signoAscendente?.imagem} alt="Imagem do Signo" className="w-[200px] h-[200px]" />
            <p className="text-2xl text-center">{signoContext.signoAscendente.horarioInicio} - {signoContext.signoAscendente.horarioFim}</p>
          </div>
        </article>
        :
        <span className="h-[356px] flex justify-center items-center text-lg">Insira sua Data e Horário de Nascimento</span>
  )
}