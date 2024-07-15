import type { Metadata } from "next";

import { Providers } from "@/providers";
import { fonts } from "@/fonts";
import Header from "@/components/header";

// 메타데이터 설정
export const metadata: Metadata = {
  title: "MY APP | THE BEST",
  description: "WHATEVER WILL BE, WILL BE. THAT'S WHY WE ARE THE BEST.",
};

// 최상위 레이아웃
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
