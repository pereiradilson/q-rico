import { useTheme } from "next-themes";
import CookieConsent from "react-cookie-consent";

export default function Cookie() {
  const { resolvedTheme } = useTheme();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Prosseguir"
      cookieName="q-ricoCookieConsent"
      style={{
        background: resolvedTheme === "light" ? "#000" : "#fff",
        textAlign: "center",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0px",
        color: resolvedTheme === "light" ? "#fff" : "#000",
      }}
      buttonStyle={{
        color: "#000",
        fontSize: "14px",
        borderRadius: "10px",
        padding: "10px",
        width: "150px",
      }}
      expires={150}
    >
      Usamos cookies para melhorar a sua experiência em nossos serviços. Ao
      navegar em nosso site, você concorda com tais condições. <br /> Para mais
      informações, visite nossa{" "}
      <a href="#" className="text-yellow-500">
        Política de Privacidade
      </a>
      .
    </CookieConsent>
  );
}
