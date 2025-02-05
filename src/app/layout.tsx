'use client';
import Navbar from '@/components/navbar';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}