import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./translations/enUS.json";
import ptBR from "./translations/ptBR.json";

const resources = {
  ptBR: {
    translation: ptBR,
  },
  enUS: {
    translation: enUS,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "ptBR",
});
