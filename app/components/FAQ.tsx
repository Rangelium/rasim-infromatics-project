import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Часто задаваемые вопросы
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="h3" variant="subtitle2">
              Как связаться с вашей службой поддержки?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Вы можете связаться с нашей службой поддержки по телефону{" "}
              <Link href="tel:+994125985141" target="_blank" rel="noopener noreferrer">
                (012) 598 51 41
              </Link>{" "}
              или по{" "}
              <Link href="mailto:160nomreliklassikgimnaziya@baku.edu.gov.az " target="_blank" rel="noopener noreferrer">
                электронной почте
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography component="h3" variant="subtitle2">
              Могу ли я уйти со школы и вернуть деньги?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Уйти со школы можно в любое время, но денег не вернем.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="h3" variant="subtitle2">
              В этой ли школе учится Расим Азадов?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Да
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4d-content" id="panel4d-header">
            <Typography component="h3" variant="subtitle2">
              Точно ли у вас учится Расим Азадов?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Возможно
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
