import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Développeur Full Stack & Data Scientist basé à Dakar" />
        <meta name="keywords" content="LY Ibrahima, portfolio, Full Stack, Data Scientist, Dakar" />
        <meta name="author" content="LY Ibrahima" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <meta name="msvalidate.01" content="your-msvalidate-01-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="alexaVerifyID" content="your-alexa-verify-id" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-180x180.png" sizes="180x180" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <title>LY Ibrahima - Portfolio</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-14">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL('https://portfolio-ibrahimaly.vercel.app'),
  title: 'LY Ibrahima - Portfolio',
  description: 'Développeur Full Stack & Data Scientist basé à Dakar',
  openGraph: {
    title: 'LY Ibrahima - Portfolio',
    description: 'Développeur Full Stack & Data Scientist',
    url: 'https://portfolio-ibrahimaly.vercel.app',
    siteName: 'Portfolio LY Ibrahima',
    locale: 'fr_FR',
    type: 'website',
  },
}