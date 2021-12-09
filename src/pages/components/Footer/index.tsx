import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear.toString());
  }, []);

  return (
    <footer className="py-8 px-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <Image
            src="/0001.jpg"
            alt="Q-Rico"
            width="100"
            height="73"
            className="object-contain md:object-scale-down"
          />

          <p className="text-center text-white text-1xl py-3">
            {currentYear} - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
