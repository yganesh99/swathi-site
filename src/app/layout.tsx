import type { Metadata } from "next";
import { Bodoni_Moda, Pinyon_Script, Spectral } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Swathi & Taha · Negombo, Sri Lanka",
  description: "Join Swathi and Taha as they celebrate their wedding in Negombo, Sri Lanka.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${spectral.variable} ${pinyon.variable} antialiased`}
    >
      <body className="min-h-screen font-light">
        <div className="backdrop" aria-hidden />
        {children}
      </body>
    </html>
  );
}
