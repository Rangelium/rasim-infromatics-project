import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rasim's project",
  description: "This is a project by Rasim made for the Informatics course in Classical Gymnasium 160.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Box
        sx={{
          "*": {
            fontFamily: `${roboto.style.fontFamily} !important`,
          },
        }}
        component="body"
      >
        {children}
      </Box>
    </html>
  );
}
