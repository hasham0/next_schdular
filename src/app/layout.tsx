import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/customComp/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import Providers from "@/providers/query-provider";

const inter = Inter({
  subsets: ["latin"],
  preload: false,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-sans",
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
    <Providers>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={
              (cn("min-h-screen bg-background font-sans antialiased"),
              inter.variable)
            }
          >
            {/* header */}
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <header>
                <Header />
              </header>
              <main className="dark:to-black/ min-h-screen bg-gradient-to-b from-blue-50 to-white dark:bg-gradient-to-b dark:from-black/60">
                {/* children */}
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
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </Providers>
  );
}
