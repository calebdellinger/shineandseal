'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import LoadingProvider from '@/components/LoadingProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem
    >
      <LoadingProvider>
        {children}
      </LoadingProvider>
    </ThemeProvider>
  );
} 