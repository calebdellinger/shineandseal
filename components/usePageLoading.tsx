"use client";

import { useEffect } from "react";
import { useLoading } from "./LoadingProvider";

export function usePageLoading() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Show loading when component mounts
    setIsLoading(true);

    // Hide loading after component is fully loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second minimum loading time

    return () => {
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  // Function to manually control loading state
  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return { showLoading, hideLoading };
} 