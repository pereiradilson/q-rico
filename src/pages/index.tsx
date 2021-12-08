import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { FiMail, FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });

    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear.toString());
  }, []);

  return (
    <>
      <Head>
        <title>Q-Rico | Construindo sua independência Financeira.</title>
      </Head>

      <section className="flex h-screen border-b-2 border-light-blue-500 border-opacity-25">
        <div className="container mx-auto bg-custom-dark flex flex-col items-center justify-center px-6">
          <Image
            src="/0001.jpg"
            alt="Q-Rico"
            width="474"
            height="335"
            className="object-contain md:object-scale-down"
          />

          <h1 className="text-center text-white text-4xl my-3">
            Construindo sua independência <br />
            financeira.
          </h1>

          <div className="mt-9">
            <h5 className="text-white mb-3">Entre em contato agora mesmo!</h5>
            <div className="flex items-center justify-center w-full">
              <a
                href="#"
                className="flex flex-row items-center font-semibold leading-none text-dark py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-400 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none"
              >
                <FiMail className="mr-2" /> Enviar mensagem
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex border-b-2 border-light-blue-500 border-opacity-25 bg-gradient-to-b from-custom-dark via-gray-900 to-custom-dark">
        <div className="container mx-auto py-36 px-16">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div
              data-aos="fade-down"
              className="flex flex-col flex-1 max-w-2xl mx-auto px-4"
            >
              <h1 className="text-white text-5xl">Seja muito bem-vindo</h1>
              <p className="text-gray-400 text-2xl text-justify mt-9">
                Eu sou Wilson Rosa e vamos descobrir juntos, as incríveis
                possibilidades que esse mercado nos oferece todos os dias.
                Conheci o mercado financeiro em 2018, de lá para cá realizei
                vários cursos e passei o ano de 2019 realizando um MBA em
                Private Bank (especialização no mercado financeiro) realizado
                pelo IBEMEC / INFOMONEY, portanto adquirindo vasto conhecimento
                sobre o mercado financeiro como um todo, e dediquei especial
                atenção ao mercado de renda variável.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="flex flex-col flex-1 items-center max-w-2xl mx-auto px-4"
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
                <li className="py-3">
                  <a
                    href="https://www.facebook.com/q.rico.investidor"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center font-semibold leading-none text-white py-4 px-10 bg-blue-600 rounded hover:bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-none"
                  >
                    <FiFacebook className="mr-2" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex py-36 border-b-2 border-light-blue-500 border-opacity-25">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div data-aos="fade-up" className="max-w-2xl mx-auto">
              <div className="overflow-hidden shadow-md">
                <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
                  O que é uma Ação?
                </div>

                <div className="p-6 bg-white border-b border-gray-200 text-justify">
                  Ações, também chamadas simplesmente de {"'papéis'"}, são as
                  parcelas que compõem o capital social de uma empresa, ou seja,
                  são as unidades de títulos emitidas por sociedades anônimas.
                  Quando as ações são emitidas por companhias abertas ou
                  assemelhadas, são negociados em bolsa de valores ou no mercado
                  de balcão.
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="max-w-2xl mx-auto mt-9 md:mt-0">
              <div className="overflow-hidden shadow-md text-gray-100">
                <div className="px-6 py-4 bg-gray-800 border-b border-gray-600 font-bold uppercase">
                  What is Lorem Ipsum?
                </div>

                <div className="p-6 bg-gray-800 border-b border-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-16">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center ">
            <Image
              src="/0001.jpg"
              alt="Q-Rico"
              width="146"
              height="103"
              className="object-contain md:object-scale-down"
            />

            <p className="text-center text-white text-1xl py-3">
              {currentYear} - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
