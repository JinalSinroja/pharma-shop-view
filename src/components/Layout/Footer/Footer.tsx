import { IconButton, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Typography variant="body2" color="white">
        Copyright © 2023 Pharma Shop
      </Typography>

      <div className="footer-links-wrapper">
        <IconButton className="footer-link">
          <FacebookOutlinedIcon color="inherit" />
        </IconButton>
        <IconButton className="footer-link">
          <EmailOutlinedIcon color="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
