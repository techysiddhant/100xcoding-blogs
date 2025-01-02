import { BASEURL, createMetadata } from '@/lib/metadata';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Loglib from "@loglib/tracker/react";
const inter = Inter({
  subsets: ['latin'],
});
export const metadata = createMetadata({
  title: {
    template: "%s | 100xcoding Blogs",
    default: "100xcoding Blogs",
  },
  description: "Discover a blog built by developers for the coder community. Get hands-on tutorials, industry trends, coding best practices, and resources to elevate your development journey",
  metadataBase: BASEURL,
});
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} `} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{
          enableSystem: true,
          defaultTheme: "dark",
        }}>
          {children}
          <Loglib
            config={{
              id: "blogs.100xcoding.com",
              consent: "granted",
            }}
          />
        </RootProvider>
      </body>
    </html>
  );
}
