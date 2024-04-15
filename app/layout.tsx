import "./globals.css";
import Header from '@/src/components/header';
import React from 'react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html>
      <body className="bg-blanc">
        <Header />
        {children}
      </body>
    </html>
  )
}