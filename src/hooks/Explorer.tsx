import { IBook } from "@/@types/models";
import React, { createContext, useContext, useState } from "react";

interface ExplorerProviderProps {
  children: React.ReactNode;
}

interface ExplorerContextData {
  selectedBook: IBook | undefined;
  setSelectedBook: React.Dispatch<React.SetStateAction<IBook | undefined>>;
}

const ExplorerContext = createContext<ExplorerContextData>(
  {} as ExplorerContextData
);

const ExplorerProvider: React.FC<ExplorerProviderProps> = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState<IBook>();

  return (
    <ExplorerContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </ExplorerContext.Provider>
  );
};

function useExplorer(): ExplorerContextData {
  const context = useContext(ExplorerContext);

  if (!context) {
    throw new Error("useExplorer must be used within a ExplorerProvider");
  }

  return context;
}

export { ExplorerProvider, useExplorer };
