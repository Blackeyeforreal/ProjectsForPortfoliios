import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/Header";
import ScrollProgressIndicator from "@/components/layout/ScrollProgressIndicator";

export const metadata: Metadata = {
  // Replace with your actual domain
  metadataBase: new URL("https://your-domain.com"),
  title: "Devang Srivastava | Specialist Programmer",
  description: "Specialist Programmer building world-class, performant web experiences with Next.js and modern design principles.",
  openGraph: {
    title: "Devang Srivastava | Specialist Programmer",
    description: "Specialist Programmer building world-class, performant web experiences with Next.js and modern design principles.",
    // Add a path to your Open Graph image
    // images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgressIndicator />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
