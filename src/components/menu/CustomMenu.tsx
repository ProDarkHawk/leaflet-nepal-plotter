import { Menu, MenuProps, Zoom } from "@mui/material";
import { MENU_HEIGHT } from "@utils/constants";
const CustomMenu = ({ children, ...otherProps }: MenuProps) => {
  return (
    <Menu
      id="menu"
      autoFocus={false}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{
        height: MENU_HEIGHT,
      }}
      TransitionComponent={Zoom}
      transitionDuration={700}
      {...otherProps}
    >
      {children}
    </Menu>
  );
};

export default CustomMenu;
