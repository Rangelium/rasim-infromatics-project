"use client";

import * as React from "react";
import { Grid, PaletteMode, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import getLPTheme from "../getLPTheme";
import AppAppBar from "../components/AppAppBar";

import Image from "next/image";

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />

      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <Hero />

      <Divider />

      <Box sx={{ bgcolor: "background.default" }} py={3} px={4}>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2 , 1fr)",
              md: "repeat(4 , 1fr)",
            },
            gap: 2,
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <Box
              sx={{
                position: "relative",
                aspectRatio: "1/1",
              }}
              key={index}
            >
              <Image fill src={`/galery/${index + 1}.jpg`} alt={`Image ${index}`} />
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider />

      <Footer />
    </ThemeProvider>
  );
}
