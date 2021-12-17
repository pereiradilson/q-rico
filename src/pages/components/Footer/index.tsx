import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear.toString());
  }, []);

  return (
    <footer className="py-8 px-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          {(resolvedTheme === "light" && (
            <Image
              src="/logo_light.svg"
              alt="Q-Rico"
              width="100"
              height="73"
              className="object-contain md:object-scale-down"
            />
          )) || (
            <Image
              src="/logo_dark.svg"
              alt="Q-Rico"
              width="100"
              height="73"
              className="object-contain md:object-scale-down"
            />
          )}

          <p className="text-center text-black dark:text-white text-1xl py-3">
            {currentYear} - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
