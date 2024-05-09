"use client"

import Image from "next/image";
import { useContext, useRef, useState } from "react";
import SignoContext from "./providers/SignoProvider";
import imgBtn from "@/public/imgs/imgBtn.jpg";

export default function InputDados(){
  const [animacao, setAnimacao] = useState<boolean>(false);
  const dataRef = useRef<any>();
  const horarioRef = useRef<any>();
  const signoContext = useContext(SignoContext);

  function setarSigno(){
    setAnimacao(true);
    signoContext?.setarSigno(dataRef.current.value, horarioRef.current.value);
    setTimeout(() => setAnimacao(false), 1000);
  }

  return(
    <section className="flex flex-col justify-center items-center gap-2 mb-20 text-xl">
      <div>
        <label>Data de Nascimento: </label>
        <input type="date" ref={dataRef} data-testid="inputData"/>  
      </div>
      <div>
        <label>Horário de Nascimento: </label>
        <input type="time" ref={horarioRef} data-testid="inputHorario"/>
      </div>
      <button role="buttonGerarSigno" disabled={animacao} onClick={() => setarSigno()}>
        <Image width={120} height={120} src={imgBtn} alt="Imagem do Mapa Astral" className={animacao === true ? "w-[120px] h-[120px] rounded-full object-cover hover:border animate-spin" : "w-[120px] h-[120px] rounded-full object-cover hover:border"}/>
      </button>
    </section>
  )
}