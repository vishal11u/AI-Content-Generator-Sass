"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SubscriptionContextType {
  isSubscribed: boolean;
  setIsSubscribed: (value: boolean) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined
);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, setIsSubscribed }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider"
    );
  }
  return context;
};
