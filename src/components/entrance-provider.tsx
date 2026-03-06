"use client";

import { createContext, useContext, useState, useEffect } from "react";

const EntranceContext = createContext(false);

export function EntranceProvider({ children }: { children: React.ReactNode }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasVisited")) {
      setShouldAnimate(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <EntranceContext.Provider value={shouldAnimate}>
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  return useContext(EntranceContext);
}
