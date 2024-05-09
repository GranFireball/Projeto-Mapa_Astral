import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SignoProvider } from "@/components/providers/SignoProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapa Astral",
  description: "Descubra seu Signo Solar e Signo Ascendente, e veja as características correspondentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SignoProvider>
            {children}
          </SignoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
