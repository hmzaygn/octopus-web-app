import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export const socialMediaData = [
  {
    label: "Twitter",
    url: "https://twitter.com/",
    icon: <XIcon style={{ fontSize: "25px" }} />,
  },
  {
    label: "GitHub",
    url: "https://github.com/",
    icon: <GitHubIcon style={{ fontSize: "25px" }} />,
  },
  {
    label: "Discord",
    url: "https://discord.com/",
    icon: (
      <FontAwesomeIcon
        icon="fa-brands fa-discord"
        style={{ fontSize: "25px" }}
      />
    ),
  },
];
