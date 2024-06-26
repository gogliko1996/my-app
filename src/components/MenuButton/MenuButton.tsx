import React from "react";
import { Button, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuButtonProps } from "./MenuButton.props";
import { colors } from "../../utils/color/color";
import { Text } from "../ScreenRoot/ScreenContent";

export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { text, bodyText, color, noOpacity, icon, width, justifyContent, getText } =
    props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (text: string) => {
    getText && getText(text)
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        style={{
          color: color ? color : colors.darkInttigo,
          justifyContent: justifyContent ? justifyContent : "none",
          width: width ? width : "none",
        }}
        onClick={handleClick}
        endIcon={icon ? icon : <KeyboardArrowDownIcon />}
      >
        <Text
          style={{ color: color ? color : colors.darkInttigo }}
          fontFamily="unset"
          fontSize={12}
          opacity={noOpacity ? "nono" : "60%"}
        >
          {text}
        </Text>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {bodyText &&
          bodyText.map((item: any, index: number) => (
            <MenuItem key={index} onClick={() => handleClose(item)} disableRipple>
              {item}
            </MenuItem>
          ))}
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
