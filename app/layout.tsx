import type { Metadata } from "next";
import "./globals.css";
import Header from "./componentes/Header/Header";

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Aqui irei brevemente me apresentar e falar um pouco dos projetos que tenho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        
        {children}
      </body>
    </html>
  );
}
