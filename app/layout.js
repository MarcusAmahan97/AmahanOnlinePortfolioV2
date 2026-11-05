import { Outfit } from "next/font/google";
import "./globals.css";

/* Outfit stays as the readable body font.
   SignPainter HouseScript is loaded via @font-face in globals.css
   for headings / your name. */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Josh Marcus L. Amahan | Portfolio",
  description:
    "Portfolio of Josh Marcus L. Amahan – BS Information Systems student at Mapúa Malayan Colleges Mindanao.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
