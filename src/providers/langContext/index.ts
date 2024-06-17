import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "./index.tsx";

export const useLanguageContext = () =>
  useContext(LanguageContext) as LanguageContextType;
