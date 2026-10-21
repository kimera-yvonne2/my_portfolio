import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kimera Yvonne | Computer Scientist & Software Engineer",
  description: "Portfolio of Kimera Yvonne, showcasing software engineering projects, embedded systems, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="text-slate-100 min-h-screen bg-grid-pattern">
        {children}
      </body>
    </html>
  );
}
