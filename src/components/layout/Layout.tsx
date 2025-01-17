// src/components/layout/Layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
  );
}