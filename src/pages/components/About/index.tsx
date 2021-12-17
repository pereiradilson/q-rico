import { FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi";

export default function About() {
  return (
    <section className="flex border-b-2 border-gray-400 dark:border-light-blue-500 border-opacity-25 bg-gradient-to-b from-gray-50 dark:from-custom-dark via-gray-100 dark:via-gray-900 to-gray-50 dark:to-custom-dark">
      <div className="container mx-auto py-24 md:py-36 px-4 md:px-16">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div
            data-aos="fade-up"
            className="flex flex-col flex-1 max-w-2xl mx-auto px-4"
          >
            <h1 className="text-black dark:text-white text-3xl md:text-5xl">
              Seja muito bem-vindo
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-1xl md:text-2xl text-justify mt-9">
              Eu sou Wilson Rosa e conheci o mercado financeiro em 2018, de lá
              para cá realizei vários cursos e passei o ano de 2019 realizando
              um MBA em Private Bank (especialização no mercado financeiro)
              realizado pelo IBEMEC / INFOMONEY, portanto adquirindo vasto
              conhecimento sobre o mercado financeiro como um todo, e dediquei
              especial atenção ao mercado de renda variável.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col flex-1 items-center max-w-2xl mx-auto px-4 mt-16 md:mt-0"
          >
            <ul>
              <li className="py-3">
                <a
                  href="https://www.youtube.com/channel/UCBa_x6GI9hZRdxNXrGi-ogA"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center font-semibold leading-none text-white py-4 px-10 bg-red-600 rounded hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:outline-none"
                >
                  <FiYoutube className="mr-2" /> Youtube
                </a>
              </li>
              <li className="py-3">
                <a
                  href="https://www.instagram.com/wilsonrosa77"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center font-semibold leading-none text-white py-4 px-10 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 rounded hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none"
                >
                  <FiInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
