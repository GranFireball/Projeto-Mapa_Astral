export default function Caracteristicas() {
  const signoCaracteristicas = [
    { nome: "Aquário", caracteristicas: "Pessoas aquarianas são originais, progressistas e humanitárias. Elas têm uma mentalidade inovadora e valorizam a liberdade e a igualdade para todos. Tendem a ser excêntricas e independentes, buscando sempre criar um mundo melhor." },
    { nome: "Peixes", caracteristicas: "Pessoas piscianas são sensíveis, intuitivas e compassivas. Elas têm uma conexão profunda com o mundo emocional e tendem a absorver as energias ao seu redor. Tendem a ser sonhadoras e artísticas, valorizando a compaixão e a empatia em seus relacionamentos." },
    { nome: "Áries", caracteristicas: "Pessoas arianas são enérgicas, corajosas e impulsivas. Elas gostam de liderar e estão sempre prontas para enfrentar desafios. Tendem a ser diretas e francas em suas interações, buscando constantemente novas aventuras." },
    { nome: "Touro", caracteristicas: "Pessoas taurinas são estáveis, pacientes e sensuais. Elas valorizam a segurança e o conforto, buscando estabilidade em todas as áreas da vida. Tendem a ser persistentes e confiáveis, apreciando as coisas boas da vida." },
    { nome: "Gêmeos", caracteristicas: "Pessoas geminianas são comunicativas, curiosas e versáteis. Elas adoram aprender e compartilhar informações, sendo sempre sociáveis e adaptáveis. Tendem a ser mentes rápidas e cheias de ideias, buscando sempre novas experiências." },
    { nome: "Câncer", caracteristicas: "Pessoas cancerianas são sensíveis, protetoras e familiares. Elas valorizam as relações emocionais e têm uma forte ligação com a família e o lar. Tendem a ser intuitivas e compassivas, cuidando dos outros com dedicação." },
    { nome: "Leão", caracteristicas: "Pessoas leoninas são carismáticas, confiantes e expressivas. Elas gostam de ser o centro das atenções e buscam reconhecimento e admiração. Tendem a ser generosas e calorosas, irradiando uma energia contagiante." },
    { nome: "Virgem", caracteristicas: "Pessoas virginianas são práticas, analíticas e organizadas. Elas valorizam a eficiência e a ordem em tudo o que fazem, sendo meticulosas em seus detalhes. Tendem a ser reservadas, mas são prestativas e confiáveis quando se trata de ajudar os outros." },
    { nome: "Libra", caracteristicas: "Pessoas librianas são diplomáticas, sociáveis e equilibradas. Elas valorizam a harmonia e a justiça em suas relações interpessoais, buscando sempre o consenso. Tendem a ser encantadoras e charmosas, procurando sempre a beleza em tudo ao seu redor." },
    { nome: "Escorpião", caracteristicas: "Pessoas escorpianas são intensas, magnéticas e determinadas. Elas têm uma aura de mistério ao seu redor e são profundamente passionais em seus relacionamentos. Tendem a ser leais e comprometidas, protegendo aqueles que amam com fervor." },
    { nome: "Sagitário", caracteristicas: "Pessoas sagitarianas são aventureiras, otimistas e filosóficas. Elas adoram explorar o mundo e buscar novas experiências, sendo sempre expansivas em sua visão de vida. Tendem a ser honestas e francas, valorizando a liberdade e a independência." },
    { nome: "Capricórnio", caracteristicas: "Pessoas capricornianas são ambiciosas, disciplinadas e responsáveis. Elas buscam constantemente o sucesso material e a estabilidade em suas vidas, sendo persistentes em alcançar seus objetivos. Tendem a ser reservadas, mas são confiáveis e leais em seus relacionamentos." },
  ];

  return (
    <section className="flex justify-center mt-8">
      <div data-testid="caracteristicas">
        {
          signoCaracteristicas.map((signo) => {
            return (
              <article key={signo.nome} className="p-4" data-testid="caracteristica">
                <h3 className="text-2xl font-bold">{signo.nome}</h3>
                <p className="text-xl">
                  {signo.caracteristicas}
                </p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}