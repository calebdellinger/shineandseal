"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading after a minimum time to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Minimum 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Listen for route changes
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
    };

    // Add event listeners for route changes
    window.addEventListener("beforeunload", handleStart);
    
    return () => {
      window.removeEventListener("beforeunload", handleStart);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner key="loading" />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={isLoading ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </LoadingContext.Provider>
  );
} 