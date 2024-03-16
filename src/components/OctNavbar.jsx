import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import OctopusIcon from "../assests/octopus.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { OctModeContext } from "../contexts/OctModeProvider";
import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

export default function OctNavbar() {
  const { darkMode, toggleMode } = useContext(OctModeContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar style={{ border: "1px solid red" }}>
        <IconButton onClick={() => navigate("/")}>
          <img src={OctopusIcon} style={{ width: "80px" }} alt="octopus" />
        </IconButton>

        <Box component="div" sx={{ flexGrow: 1 }} />

        <Button
          style={{ color: "black", backgroundColor: "white" }}
          onClick={() => navigate("/finance")}
        >
          TEST
        </Button>

        <Button color="inherit" onClick={toggleMode}>
          {darkMode ? (
            <WbSunnyOutlinedIcon
              style={{ fontSize: "30px", color: "#000000" }}
            />
          ) : (
            <DarkModeOutlinedIcon
              style={{ fontSize: "30px", color: "#000000" }}
            />
          )}
        </Button>
      </Toolbar>
    </Box>
  );
}
