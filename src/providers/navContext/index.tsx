import React, { createContext, ReactNode, useEffect, useState } from "react";

type NavProviderProps = {
  children: ReactNode;
};

export type NavContextType = {
  page: string;
  handlePageNavigation: (page: string) => void;
};

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<NavProviderProps> = ({
  children,
}): JSX.Element => {
  const [page, setPage] = useState(
    sessionStorage.getItem("@currPage:") || "/home",
  );

  useEffect(() => {
    sessionStorage.setItem("@currPage:", window.location.pathname);
  }, [page]);

  const handlePageNavigation = (page: string): void => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavContext.Provider value={{ page, handlePageNavigation }}>
      {children}
    </NavContext.Provider>
  );
};
