import { CustomMenuProps } from "@interfaces/menu";
import { MouseEvent, ReactElement, useState } from "react";

interface MenuToggleProps {
  children: (props: CustomMenuProps) => ReactElement;
}

const MenuToggle = ({ children }: MenuToggleProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isMenuOpen = !!anchorEl;

  const onMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const onToggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  return children({
    isMenuOpen,
    anchorEl,
    onMenuOpen,
    onMenuClose,
    onToggleMenu,
  });
};

export default MenuToggle;
