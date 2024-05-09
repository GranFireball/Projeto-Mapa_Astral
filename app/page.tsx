import Caracteristicas from "@/components/caracteristicas";
import CarouselMapa from "@/components/carousel";
import Header from "@/components/header";
import InputDados from "@/components/inputDados";

export default function Home() {

  return (
    <main className="min-h-screen w-full bg-sky-300 dark:bg-sky-950 font-kalam">
      <Header />
      <InputDados />
      <CarouselMapa />
      <Caracteristicas />
    </main>
  );
}
