import { TFunction, i18n } from "i18next";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextProps {
  children: ReactNode;
}

export type LanguageContextType = {
  t: TFunction<"translation", undefined>;
  i18n: i18n;
  onClickLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  languages: {
    [key: string]: {
      nativeName: string;
    };
  };
  language: string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<LanguageContextProps> = ({
  children,
}): JSX.Element => {
  const languages: LanguageContextType["languages"] = {
    ptBR: { nativeName: "PT" },
    enUS: { nativeName: "EN" },
  };

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("ptBR");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const onClickLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages, language }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
