import "./globals.css";
import Header from '@/src/components/header'
import Footer from "@/src/components/footer";

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
        <Footer />
      </body>
    </html>
  )
}