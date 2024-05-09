"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import imgCeu1 from "@/public/imgs/imagemCeu1.png";
import imgCeu2 from "@/public/imgs/imagemCeu2.png";
import { ModeToggle } from "@/components/modeToggle";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="relative mb-12">
      <Image src={theme === "dark" ? imgCeu2 : imgCeu1} alt="Imagem do céu" className="absolute w-full h-[260px] object-cover opacity-75" />
      <div className="w-full h-[260px] flex justify-center items-center p-4">
        <h1 className="text-white text-6xl text-center z-10">MAPA ASTRAL</h1>
      </div>
      <div className="absolute right-0 top-0 p-4 z-10">
        <ModeToggle />
      </div>
    </header>
  )
}