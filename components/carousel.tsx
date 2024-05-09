import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Signo from "./signo"

export default function CarouselMapa() {
  return (
    <section className="flex justify-center">
      <Carousel className="w-full max-w-xs">
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Signo titulo="Signo Solar" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Signo titulo="Signo Ascendente" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  )
}
