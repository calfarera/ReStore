// Import Material-UI
import { Container, Typography, Paper, Divider, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { history } from "../..";

// Codes
export default function ServerError() {
  // History/Navigate
  // let navigate = useNavigate();
  const { state } = useLocation() as any;

  console.log("Ini State Error: ", state.state);

  return (
    <>
      <Container component={Paper} sx={{ padding: "20px" }}>
        {state.state?.error ? (
          <>
            <Typography variant="h3" color="error" gutterBottom align="justify">
              {state.state.error.title}
            </Typography>
            <Divider />
            <Typography gutterBottom sx={{ paddingTop: "20px" }}>
              {state.state.error.detail || "Internal server error"}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Server Error
            </Typography>
          </>
        )}
        <Button onClick={() => history.push("/catalog")}>
          Go Back to the Store
        </Button>
      </Container>
    </>
  );
}
