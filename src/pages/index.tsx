import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import * as yup from "yup";

import { FiMail, FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaChartLine, FaChartPie, FaDonate } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [currentYear, setCurrentYear] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(false);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 2000,
    });

    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear.toString());
  }, []);

  function scrollToContact() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
    };

    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
    });

    if (name === "") {
      toast.warning("Informe o nome", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      });
      return;
    }

    if (email === "") {
      toast.warning("Informe seu melhor e-mail", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      });
      return;
    }

    try {
      setButton(true);

      await schema.validate(data, { abortEarly: false });

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        toast.error("Erro ao enviar mensagem.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });

        setButton(false);
        return;
      }

      toast.success("Formulário enviado.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      });

      setName("");
      setEmail("");
      setButton(false);
    } catch (error) {
      toast.error("Formulário inválido.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      });

      setButton(false);
    }
  }

  return (
    <>
      <ToastContainer limit={2} />

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
            data-aos="zoom-in"
          />

          <h1 className="text-center text-white text-4xl my-3">
            Construindo sua independência <br />
            financeira.
          </h1>

          <div className="mt-9">
            <h5 className="text-white mb-3">Entre em contato agora mesmo!</h5>
            <div className="flex items-center justify-center w-full">
              <button
                className="flex flex-row items-center font-semibold leading-none text-dark py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-400 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none transition"
                onClick={scrollToContact}
              >
                <FiMail className="mr-2" /> Enviar mensagem
              </button>
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

      <section className="flex py-28 border-b-2 border-light-blue-500 border-opacity-25">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between px-6">
            <div
              data-aos="flip-left"
              className="flex flex-col flex-1 justify-center items-center mx-3 my-3 bg-yellow-600 py-6 rounded-lg bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 border-4 border-yellow-50 border-opacity-25"
            >
              <FaChartLine className="text-black pb-4" size="100" />
              <p className="text-2xl font-black text-black">
                Aumente seu patrimônio
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-col flex-1 justify-center items-center mx-3 my-3 bg-yellow-600 py-6 rounded-lg bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 border-4 border-yellow-50 border-opacity-25"
            >
              <FaChartPie className="text-black pb-4" size="100" />
              <p className="text-2xl font-black text-black">
                Tenha partes de empresas
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="flex flex-col flex-1 justify-center items-center mx-3 my-3 bg-yellow-600 py-6 rounded-lg bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 border-4 border-yellow-50 border-opacity-25"
            >
              <FaDonate className="text-black pb-4" size="100" />
              <p className="text-2xl font-black text-black">
                Diversifique seus investimentos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex py-28 border-b-2 border-light-blue-500 border-opacity-25 bg-gradient-to-b from-custom-dark via-gray-900 to-custom-dark">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center px-6">
            <div
              data-aos="fade-up"
              className="flex flex-col flex-1 overflow-hidden rounded-lg mx-3"
            >
              <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold">
                Você quer aprender a investir no mercado de ações?
              </div>

              <div className="p-6 bg-white text-justify italic">
                O curso Q-Rico Mercado de Ações, vai ensinar os conceitos do que
                são Ações, como negociá-las, passaremos pela Análise
                Fundamentalista, Avaliação de Ações e Análise Técnica. E por
                fim, vou lhes apresentar estratégias consistentes para alcançar
                retornos superiores aos índices de mercado.
              </div>

              <Image
                src="/stocks_graphics.jpg"
                alt="Gráfico Ações"
                width="1772"
                height="980"
                layout="responsive"
                className="object-cover w-full h-full"
              />
            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-col flex-1 items-center overflow-hidden rounded-lg mx-3 my-6"
            >
              <div className="px-6 py-4">
                <p className="font-bold text-4xl text-yellow-600 text-justify">
                  “Depois que você tem uma base sólida de conhecimento, fica
                  muito mais fácil aprender a investir e lidar com dinheiro.”
                </p>
                <p className="font-bold text-yellow-600 text-right text-1xl italic mt-2">
                  Rafael Seabra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex py-28 border-b-2 border-light-blue-500 border-opacity-25 bg-gradient-to-b from-custom-dark via-gray-900 to-custom-dark"
      >
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center px-6">
            <p
              data-aos="zoom-in"
              className="font-bold text-4xl text-yellow-600 text-justify"
            >
              Certo e por onde eu começo?
            </p>
            <p
              data-aos="zoom-in"
              className="font-bold text-2xl text-white text-justify py-6"
            >
              Preencha os campos abaixo e entraremos em contato com você.
            </p>
            <div
              data-aos="flip-up"
              className="flex flex-col items-center justify-center w-full md:w-1/2"
            >
              <input
                type="text"
                className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full flex flex-row items-center justify-center font-semibold leading-none text-dark py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-400 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleFormSubmit}
                disabled={button}
              >
                <FiMail className="mr-2" /> Enviar mensagem
              </button>
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
