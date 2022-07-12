// Import React's Components
import React from "react";
import { Link } from "react-router-dom";

// Import Material-UI Components
import { Button, Container, Divider, Typography, Paper } from "@mui/material";

// Codes and Export
export default function NotFound() {
  return (
    <>
      <Container component={Paper} sx={{ height: 400 }}>
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          sx={{ padding: 10 }}
        >
          Oops - Sorry We Could Not Find What You Looking For
        </Typography>

        <Divider />

        <Button
          fullWidth
          component={Link}
          to="/catalog"
          sx={{ marginTop: "25px" }}
        >
          Go Back to Shop
        </Button>
      </Container>
    </>
  );
}
