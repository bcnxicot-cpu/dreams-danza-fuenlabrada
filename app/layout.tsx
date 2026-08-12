import type { Metadata } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Dreams | Danza y teatro musical en Fuenlabrada",
  description: "Danza, teatro musical y producciones escénicas en Fuenlabrada. Pregunta por los grupos y prueba una clase en Dreams.",
  openGraph: {
    title: "Dreams — Sal del ensayo. Entra en escena.",
    description: "Danza y teatro musical en Fuenlabrada.",
    images: ["/images/grease.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
