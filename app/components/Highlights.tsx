import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    title: "Подходит для всех",
    description: "Наша школа подходит для детей всех возрастов и уровней подготовки.",
  },
  {
    title: "Надежность и долговечность",
    description: "Мы предлагаем качественное образование, которое будет актуальным долгие годы.",
  },
  {
    title: "Простота поступления",
    description: "Мы предлагаем простую процедуру поступления, которая не займет много времени и сил.",
  },
  {
    title: "Современные технологии",
    description:
      "Мы используем современные технологии обучения, которые помогут вашему ребенку получить качественные знания.",
  },
  {
    title: "Отзывчивая учебная поддержка",
    description: "Наши учителя всегда готовы помочь вам в решении любых вопросов и проблем.",
  },
  {
    title: "Внимание к деталям",
    description: "Мы уделяем внимание каждому ученику и помогаем ему развиваться в нужном направлении.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Основные моменты
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Почему стоит выбрать нашу школу для обучения вашего ребенка именно сейчас.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
