'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Layout>{children}</Layout>
    </AuthProvider>
  );
} 