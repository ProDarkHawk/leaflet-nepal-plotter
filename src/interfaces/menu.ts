import { MouseEvent } from "react";
export interface CustomMenuPartialProps {
  onMenuOpen: (e: MouseEvent<HTMLButtonElement>) => void;
  onMenuClose: () => void;
  onToggleMenu: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface CustomMenuProps extends CustomMenuPartialProps {
  isMenuOpen: boolean;
  anchorEl: HTMLButtonElement | null;
}
