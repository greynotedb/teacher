import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/SidebarNav";

const mulish = Mulish({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Greynote Teachers Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <ChakraProvider>
          <SidebarWithHeader>{children}</SidebarWithHeader>
        </ChakraProvider>
      </body>
    </html>
  );
}
