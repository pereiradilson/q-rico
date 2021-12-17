import { FormEvent, useEffect, useState } from "react";
import * as yup from "yup";
import { FiMail } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(false);

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

      <section
        id="contact"
        className="flex border-b-2 border-gray-400 dark:border-light-blue-500 border-opacity-25"
      >
        <div className="container mx-auto py-24 md:py-36">
          <div className="flex flex-col justify-center items-center px-4 md:px-6">
            <p
              data-aos="zoom-in"
              className="font-bold text-2xl md:text-4xl text-yellow-600 text-justify"
            >
              Certo e por onde eu começo?
            </p>
            <p
              data-aos="zoom-in"
              className="font-bold md:text-2xl text-black dark:text-white text-justify py-6"
            >
              Preencha os campos abaixo e entraremos em contato com você.
            </p>
            <div
              data-aos="flip-up"
              className="flex flex-col items-center justify-center w-full md:w-1/2"
            >
              <input
                type="text"
                className="w-full h-12 rounded-lg px-4 bg-gray-200 dark:bg-white text-lg focus:ring-blue-600 mb-4"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="w-full h-12 rounded-lg px-4 bg-gray-200 dark:bg-white text-lg focus:ring-blue-600 mb-4"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full flex flex-row items-center justify-center font-semibold leading-none text-black py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-400 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleFormSubmit}
                disabled={button}
              >
                <FiMail className="mr-2" /> Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
