import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { useState } from "react";
import {
  Box,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { _PaletteMode } from "./type";


function SocialClub() {
  const [mode, setMode] = useState<_PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default SocialClub;
