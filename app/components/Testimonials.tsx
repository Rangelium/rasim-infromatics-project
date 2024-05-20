import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: "Азадов Расим",
    occupation: "Ученик 11 класса",
    testimonial:
      "Классическая гимназия №160 – это школа, где действительно заботятся о каждом ученике. Учителя всегда готовы помочь и объяснить материал, а также поддерживают во всех начинаниях. Я с радостью иду на занятия каждый день!",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: "Мамедова Лейла",
    occupation: "Родитель ученика",
    testimonial:
      "Мой сын учится в Классической гимназии №160 уже третий год, и я не могу нарадоваться его успехам. Учителя здесь – настоящие профессионалы, которые умеют заинтересовать и мотивировать детей. Мы очень довольны нашим выбором школы.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: "Евгений",
    occupation: "Ученик 1 класса",
    testimonial:
      "Мне очень нравится учиться в этой гимназии. Здесь много интересных кружков и секций, где можно развивать свои таланты. А еще у нас очень дружный класс и отличные учителя!",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: "Джафар Гасанов",
    occupation: "Выпускник",
    testimonial:
      "Классическая гимназия №160 – это не просто школа, это настоящая семья. Учителя и администрация всегда открыты для общения и готовы помочь в любой ситуации. Дочь с удовольствием посещает занятия и получает отличные знания.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: "Таир Абдуллаев",
    occupation: "Отец",
    testimonial:
      "Я очень рад, что учусь в Классической гимназии №160. Здесь отличные условия для учебы и много возможностей для самореализации. Учителя поддерживают нас во всех начинаниях, и это мотивирует достигать новых высот.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: "Айдана Абдуллаева",
    occupation: "Ученица 5 класса",
    testimonial:
      "Когда мы выбирали школу для дочери, важным критерием для нас было качество образования и безопасность. В Классической гимназии №160 мы нашли все это и даже больше. Учителя внимательные и профессиональные, а атмосфера в школе очень доброжелательная.",
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Отзывы наших учеников и родителей
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Узнайте, что говорят о нас наши ученики и их родители. Мы гордимся успехами наших выпускников и радуемся
          каждому новому достижению.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader avatar={testimonial.avatar} title={testimonial.name} subheader={testimonial.occupation} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
