// Import React's Components
import React from "react";

// Import Material-UI Components
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Message Loading
interface Props {
  message?: string;
}

// Codes
export default function LoadingComponent({ message = "Loading..." }: Props) {
  return (
    <>
      <Backdrop open={true} invisible={true}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress size={100} color="secondary" />

          <Typography
            variant="h4"
            sx={{
              justifyContent: "center",
              position: "fixed",
              top: "60%",
            }}
          >
            {message}
          </Typography>
        </Box>
      </Backdrop>
    </>
  );
}
