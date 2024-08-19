import React from "react";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { add } from "../Utils/Add";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      console.log("sum is", sum);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/calculator2.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 3,
            boxShadow: 3,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            String Calculator App
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter numbers"
            multiline
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              mb: 2,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            sx={{
              mb: 2,
            }}
          >
            Calculate
          </Button>
          {result !== null && (
            <Box mt={2}>
              <Alert severity="success">
                <Typography variant="h6">Result: {result}</Typography>
              </Alert>
            </Box>
          )}
          {error && (
            <Box mt={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default StringCalculator;
