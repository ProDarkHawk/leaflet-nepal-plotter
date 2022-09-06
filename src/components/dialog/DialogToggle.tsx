import { CustomDialogProps } from "@interfaces/dialog";
import { ReactElement, useState } from "react";

interface DialogToggleProps {
  children: (props: CustomDialogProps) => ReactElement;
}

const DialogToggle = ({ children }: DialogToggleProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return children({ isDialogOpen, toggleDialog });
};

export default DialogToggle;
