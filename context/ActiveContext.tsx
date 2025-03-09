"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActiveContextType {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

export const ActiveProvider = ({ children }: { children: ReactNode }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <ActiveContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </ActiveContext.Provider>
    );
};

export const useActive = () => {
    const context = useContext(ActiveContext);
    if (!context) {
        throw new Error("useActive must be used within an ActiveProvider");
    }
    return context;
};
