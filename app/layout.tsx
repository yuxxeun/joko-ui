import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: "Joko UI - Free Tailwind CSS Components",
  description:
    "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster. No installation required.",
  keywords: ["tailwind css", "components", "ui library", "free", "open source"],
  openGraph: {
    title: "Joko UI",
    description: "UI components for modern web apps",
    url: baseUrl,
    siteName: "Joko UI",
    images: [
      {
        url: `${baseUrl}/joko-ui.webp`,
        width: 1200,
        height: 630,
        alt: "Joko UI Open Graph Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
