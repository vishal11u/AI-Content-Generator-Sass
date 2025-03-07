"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AiOutputContextType {
  aiOutpoot: string;
  setAiOutpoot: (value: string) => void;
}

const AiOutputContext = createContext<AiOutputContextType | undefined>(
  undefined
);

export const AiOutputProvider = ({ children }: { children: ReactNode }) => {
  const [aiOutpoot, setAiOutpoot] = useState<string>("");

  return (
    <AiOutputContext.Provider value={{ aiOutpoot, setAiOutpoot }}>
      {children}
    </AiOutputContext.Provider>
  );
};

export const useAiOutput = () => {
  const context = useContext(AiOutputContext);
  if (!context) {
    throw new Error("useAiOutput must be used within an AiOutputProvider");
  }
  return context;
};
