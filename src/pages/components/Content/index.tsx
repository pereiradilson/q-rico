import { useTheme } from "next-themes";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

import ThemeToggle from "../ThemeToggle";

export default function Content() {
  const { resolvedTheme } = useTheme();

  function scrollToContact() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <section className="flex h-screen border-b-2 border-gray-400 dark:border-light-blue-500 border-opacity-25">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex justify-end my-5 px-5 w-full">
          <ThemeToggle />
        </div>
        <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-6">
          {(resolvedTheme === "light" && (
            <Image
              src="/logo_light.svg"
              alt="Q-Rico"
              width="474"
              height="335"
              className="object-contain md:object-scale-down"
              data-aos="zoom-in"
            />
          )) || (
            <Image
              src="/logo_dark.svg"
              alt="Q-Rico"
              width="474"
              height="335"
              className="object-contain md:object-scale-down"
              data-aos="zoom-in"
            />
          )}

          <h1 className="text-center text-black dark:text-white text-2xl md:text-4xl my-3">
            Construindo sua independĂȘncia <br />
            financeira.
          </h1>

          <div className="mt-9">
            <h5 className="text-black dark:text-white mb-3">
              Entre em contato agora mesmo!
            </h5>
            <div className="flex items-center justify-center w-full">
              <button
                className="flex flex-row items-center font-semibold leading-none text-black dark:text-black py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-400 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none transition"
                onClick={scrollToContact}
              >
                <FiMail className="mr-2" /> Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
