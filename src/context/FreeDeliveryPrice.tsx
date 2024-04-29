"use client";

import { createContext } from "react";

export const FreeDeliveryContext = createContext(10000);

const FreeDeliveryContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FreeDeliveryContext.Provider value={10000}>
      {children}
    </FreeDeliveryContext.Provider>
  );
};

export default FreeDeliveryContextProvider;
