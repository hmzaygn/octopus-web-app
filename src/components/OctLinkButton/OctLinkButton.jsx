import React from "react";
import { Box, Link } from "@mui/material";
import octLinkButtonStyles from "./OctLinkButton.module.css";

const OctLinkButton = ({ url, icon }) => {
  return (
    <Box className={octLinkButtonStyles["box"]}>
      <Link
        href={url}
        className={octLinkButtonStyles["link-button"]}
        style={{ color: "black" }}
        target="_blank"
      >
        {icon}
      </Link>
    </Box>
  );
};

export default OctLinkButton;
