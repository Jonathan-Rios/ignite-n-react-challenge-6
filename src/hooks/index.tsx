import React from "react";

import { ExplorerProvider } from "./Explorer";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ExplorerProvider>{children}</ExplorerProvider>
);
