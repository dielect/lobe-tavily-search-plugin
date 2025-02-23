import type { Metadata } from "next";

import "./globals.css";
import React from "react";



export const metadata:Metadata = {
    title: "Tavily Search Plugin",
    description: "Smart web search that reads and analyzes pages to deliver comprehensive answers from Google results.",
    twitter: {
        card: 'summary_large_image',
        site: 'https://lobe-plugin.composere.com',
        creator: '@dielectric',
        title: 'Tavily Search Plugin',
        description: 'Smart web search that reads and analyzes pages to deliver comprehensive answers from Google results.',
        images: [
            {
                url: 'https://lobe-plugin.composere.com/welcome.png',
                width: 1200,
                height: 675,
                alt: 'Tavily Search Plugin Example',
            }
        ],
    },
    openGraph: {
        images: [
            {
                url: 'https://lobe-plugin.composere.com/welcome.png',
                width: 1200,
                height: 675,
                alt: 'Tavily Search Plugin Example',
            }
        ],
        type: 'website',
        siteName: 'Tavily Search Plugin',
        title: 'Tavily Search Plugin',
        description: 'Smart web search that reads and analyzes pages to deliver comprehensive answers from Google results.',
        url: 'https://lobe-plugin.composere.com',
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
      >
        {children}
      </body>
    </html>
  );
}
