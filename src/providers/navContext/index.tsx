import React, { createContext, ReactNode, useEffect, useState } from "react";

type NavProviderProps = {
  children: ReactNode;
};

type NavContext = {
  page: string;
  handlePageNavigation: (page: string) => void;
};

export const NavContext = createContext<NavContext | undefined>(undefined);

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
