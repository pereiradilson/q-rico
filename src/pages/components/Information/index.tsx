export default function Information() {
  return (
    <section className="flex border-b-2 border-gray-400 dark:border-light-blue-500 border-opacity-25 bg-gradient-to-b from-gray-50 dark:from-custom-dark via-gray-100 dark:via-gray-900 to-gray-50 dark:to-custom-dark">
      <div className="container mx-auto py-24 md:py-36">
        <div className="flex flex-col gap-6 md:flex-row items-center justify-between px-4 md:px-6">
          <div
            data-aos="zoom-in"
            className="flex flex-col flex-1 overflow-hidden rounded-lg"
          >
            <div className="px-6 py-4 bg-gray-300 dark:bg-white text-black border-b border-gray-200 font-bold">
              Você quer aprender a investir no mercado de ações?
            </div>

            <div className="p-6 bg-gray-200 dark:bg-white text-black text-justify italic">
              O curso Q-Rico Mercado de Ações, vai ensinar os conceitos do que
              são Ações, como negociá-las, passaremos pela Análise
              Fundamentalista, Avaliação de Ações e Análise Técnica. E por fim,
              vou lhes apresentar estratégias consistentes para alcançar
              retornos superiores aos índices de mercado.
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col flex-1 items-center overflow-hidden rounded-lg"
          >
            <div className="ml-0 md:ml-8 pt-8 md:pt-0">
              <p className="font-bold text-2xl md:text-3xl text-yellow-600 text-justify">
                “Depois que você tem uma base sólida de conhecimento, fica muito
                mais fácil aprender a investir e lidar com dinheiro.”
              </p>
              <p className="w-full font-bold text-yellow-600 text-right text-1xl italic mt-2">
                Rafael Seabra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
