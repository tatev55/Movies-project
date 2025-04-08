import { Box, Typography } from "@mui/material";

const Help = () => {
  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto", color : "#B9C1D5" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Help & Support
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        How to Obtain Your Gemini API Key
      </Typography>
      
            To get your Gemini API key, follow these steps:
            <ol>
                <li style = {{margin: "7px 0"}}>Go to  <a href="https://ai.google.dev/gemini-api/docs/quickstart?lang=node" target="_blank">Gemini API quickstart</a>.</li>
                <li style = {{margin: "7px 0"}}>In the Google AI Studio, navigate to "API Keys" and click on the "Get a Gemini API Key" button.</li>
                <li style = {{margin: "7px 0"}}>Click on "Create API Key" to generate your key.</li>
                <li style = {{margin: "7px 0"}}>Copy the API key and paste it into the "Settings" section of the app.</li>
            </ol>
      

      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        How to Use the AI Assistant
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Use the text box to input your query and click "Send" to get a response from the AI.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        Common Issues
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        If you encounter issues, try refreshing the page or check your API key in the settings.
      </Typography>

    </Box>
  );
};

export default Help;
