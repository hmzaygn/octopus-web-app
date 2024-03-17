import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import OctopusIcon from "../../assests/octopus.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { OctModeContext } from "../../contexts/OctModeProvider";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { socialMediaData } from "../../data";
import OctLinkButton from "../OctLinkButton/OctLinkButton";
import octNavbarStyle from "./OctNavbar.module.css";

export default function OctNavbar() {
  const { darkMode, toggleMode } = useContext(OctModeContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton onClick={() => navigate("/")}>
          <img src={OctopusIcon} style={{ width: "80px" }} alt="octopus" />
        </IconButton>

        <Box component="div" sx={{ flexGrow: 1 }} />

        {socialMediaData?.map((item, index) => (
          <OctLinkButton key={index} url={item.url} icon={item.icon} />
        ))}

        <Button
          color="inherit"
          onClick={toggleMode}
          className={octNavbarStyle["box"]}
        >
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
