import { useState } from "react";

import "./App.css";
import {
  Box,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  FormControlLabel,
  Typography,
  Switch,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

function App() {
  const [emailcontent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [subject, setSubject] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("API CALLING : ");
      const api_url = import.meta.env.VITE_BE_API_URL;
      const requestBody = {
        emailContent: emailcontent,
        tone: tone,
        subject: subject,
      };
      console.log(requestBody);
      const response = await axios.post(api_url, requestBody);
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to generated email. Please try again.");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ReplyGenie📧
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        Your AI-powered em@il assistant
      </Typography>

      <hr />
      <br />
      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          label="Orignal Email Content"
          value={emailcontent || ""}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box display="flex" alignItems="center" width="100%" gap={2}>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel>Tone (Optional) </InputLabel>
            <Select
              value={tone || ""}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Friendly">Friendly</MenuItem>
              <MenuItem value="Funny">Funny</MenuItem>
              <MenuItem value="Funny">Funny</MenuItem>
            </Select>
          </FormControl>
          {/* Toggle Subject (Right Half) */}
          <Box
            sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={subject || false}
                  onChange={() => setSubject(!subject)}
                />
              }
              label="Want to include Subject?"
            />
          </Box>
        </Box>
        <br />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disable={!emailcontent || loading}
          fullWidth
        >
          {loading ? (
            <CircularProgress size={24} color="white" />
          ) : (
            "Generate Reply"
          )}
        </Button>
      </Box>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {{ error }}
        </Typography>
      )}
      {generatedReply && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="h6" gutterBottom>
            Generated Reply :)
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            value={generatedReply || ""}
            inputProps={{ readOnly: true }}
          />
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;
