import { IWrapper } from "@interfaces/wrapper";
import { OverridableStringUnion } from "@mui/types";
import { ReactNode } from "react";

export interface CustomDialogPartialProps {
  toggleDialog: () => void;
}

export interface CustomDialogProps extends CustomDialogPartialProps {
  isDialogOpen: boolean;
}

export interface ConfirmDialogProps extends IWrapper {
  renderButtonColor?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "dark"
  >;
  renderButtonText?: string | ReactNode;
  disableRenderButton?: boolean;
  cancelButtonText?: string | ReactNode;
  proceedButtonText?: string | ReactNode;
  dialogTitle?: string | ReactNode;
  handleProceed: () => void;
}
