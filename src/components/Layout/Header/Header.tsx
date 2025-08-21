import { IconButton, Typography } from "@mui/material";
import Logo from "../../../images/logo.jpg";
import "./header.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-logo-wrapper">
        <img className="header-logo" src={Logo} alt="logo" />
      </div>
      <div className="header-options-wrapper">
        <div className="header-options">
          <Typography className="header-option-label" variant="body2">
            Shop all
          </Typography>
          <div>
            <ArrowDropDownIcon />
          </div>
        </div>

        <div className="header-options">
          <Typography className="header-option-label" variant="body2">
            Health Interests
          </Typography>
          <div>
            <ArrowDropDownIcon />
          </div>
        </div>

        <div className="header-options">
          <Typography className="header-option-label" variant="body2">
            Brands
          </Typography>
          <div>
            <ArrowDropDownIcon />
          </div>
        </div>

        <Typography className="header-option-label" variant="body2">
          Contact us
        </Typography>
      </div>
      <div className="header-cta">
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
