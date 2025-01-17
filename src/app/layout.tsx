// src/app/layout.tsx
import { Metadata } from 'next';
import ClientProviders from '@/components/providers/ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog Platform',
  description: 'A modern blog platform built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}