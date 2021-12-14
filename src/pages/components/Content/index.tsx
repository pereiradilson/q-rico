import Image from "next/image";
import { FiMail } from "react-icons/fi";

export default function Content() {
  function scrollToContact() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <section className="flex h-screen border-b-2 border-light-blue-500 border-opacity-25">
      <div className="container mx-auto bg-custom-dark flex flex-col items-center justify-center px-6">
        <Image
          src="/0001.svg"
          alt="Q-Rico"
          width="474"
          height="335"
          className="object-contain md:object-scale-down"
          data-aos="zoom-in"
        />

        <h1 className="text-center text-white text-2xl md:text-4xl my-3">
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
  );
}
