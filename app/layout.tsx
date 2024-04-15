import "./globals.css";
import Header from '@/src/components/header'

const inter = Inter({ subsets: ["latin"] });


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