import { FaChartLine, FaChartPie, FaDonate } from "react-icons/fa";

export default function Card() {
  return (
    <section className="flex border-b-2 border-gray-400 dark:border-light-blue-500 border-opacity-25">
      <div className="container mx-auto py-24 md:py-36">
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between px-4 md:px-6">
          <div
            data-aos="flip-left"
            className="flex flex-col w-full md:flex-1 justify-center items-center bg-yellow-600 py-6 rounded-lg bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 border-4 border-yellow-50 border-opacity-25"
          >
            <FaChartLine className="text-black pb-4" size="100" />
            <p className="text-xl md:text-2xl font-black text-black">
              Aumente seu patrimônio
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col w-full md:flex-1 justify-center items-center bg-yellow-600 py-6 rounded-lg bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 border-4 border-yellow-50 border-opacity-25"
          >
            <FaChartPie className="text-black pb-4" size="100" />
            <p className="text-xl md:text-2xl font-black text-black">
              Tenha partes de empresas
            </p>
          </div>

          <div
            data-aos="flip-right"
            className="flex flex-col w-full md:flex-1 justify-center items-center bg-yellow-600 py-6 rounded-lg bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 border-4 border-yellow-50 border-opacity-25"
          >
            <FaDonate className="text-black pb-4" size="100" />
            <p className="text-xl md:text-2xl font-black text-black">
              Diversifique seus investimentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
