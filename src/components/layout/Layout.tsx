// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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