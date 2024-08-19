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
      <Container maxWidth="sm">
        <Box mt={8} textAlign="center">
          <Typography variant="h4" gutterBottom>
            String Calculator
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter numbers"
            multiline
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          </Box>
          {result !== null && (
            <Box mt={3}>
              <Alert severity="success">
                <Typography variant="h6">Result: {result}</Typography>
              </Alert>
            </Box>
          )}
          {error && (
            <Box mt={3}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default StringCalculator;
