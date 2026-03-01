import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Alfaro Pinto — Software Engineer",
  description:
    "CS student at Tec de Monterrey. Backend systems, AI/ML, and full-stack development. Passionate about scalable software.",
  openGraph: {
    title: "Diego Alfaro Pinto — Software Engineer",
    description:
      "CS student at Tec de Monterrey. Backend systems, AI/ML, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
