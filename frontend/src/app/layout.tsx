import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import BetaBanner from "@/components/common/BetaBanner";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUSE PORT",
  description: "Let's post your muse here!",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <html lang="ja" suppressHydrationWarning>
        <head />
        <body className={notoSansJP.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <BetaBanner />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
