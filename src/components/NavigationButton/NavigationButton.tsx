import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavigationButtonProps } from "./NavigationButton.props";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../../utils/color/color";

const ITEM_HEIGHT = 48;
export const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
  const { options, getTitle } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option?: string) => {
    setAnchorEl(null);

    getTitle && getTitle(option);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ fontSize: 30, color: colors.black }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options &&
          options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={() => handleClose(option)}
            >
              {option}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};
