// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    );
  }

// src/pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Platform - Home</title>
        <meta name="description" content="A modern blog platform built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Blog Platform</h1>
        
        <div className="prose lg:prose-xl">
          <p className="mb-4">
            Share your thoughts with the world and engage with other writers.
          </p>
          
          <div className="mt-8">
            <Link 
              href="/blog"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Read Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}