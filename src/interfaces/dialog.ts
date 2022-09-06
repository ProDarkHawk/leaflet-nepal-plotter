export interface CustomDialogPartialProps {
  toggleDialog: () => void;
}

export interface CustomDialogProps extends CustomDialogPartialProps {
  isDialogOpen: boolean;
}
