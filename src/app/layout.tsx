import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/customComp/header";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  preload: false,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Schedular",
  description: "Schedule Your Meeting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* header */}
          <header>
            <Header />
          </header>

          {/* children */}
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>

          {/* footer */}
          <footer>
            <div className="bg-blue-100 py-12">
              <div className="container mx-auto px-4 text-center font-semibold text-gray-600">
                <p>Made By Hasham</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
