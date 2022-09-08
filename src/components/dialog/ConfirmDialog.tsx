import { FlexBox } from "@components/box";
import { CustomDialog, DialogToggle } from "@components/dialog";
import { UIButton } from "@components/ui";
import { ConfirmDialogProps } from "@interfaces/dialog";

export default function ConfirmDialog({
  children,
  renderButtonColor = "error",
  renderButtonText = "Confirm",
  cancelButtonText = "Cancel",
  proceedButtonText = "Proceed",
  dialogTitle = "Confirm Dialog",
  handleProceed,
}: ConfirmDialogProps) {
  return (
    <DialogToggle>
      {({ isDialogOpen, toggleDialog }) => (
        <>
          <UIButton
            sx={{
              ml: 1,
            }}
            color={renderButtonColor}
            onClick={toggleDialog}
            variant="contained"
          >
            {renderButtonText}
          </UIButton>
          <CustomDialog
            sx={{
              zIndex: 999999,
            }}
            actions={
              <FlexBox>
                <UIButton
                  onClick={toggleDialog}
                  sx={{
                    ml: 1,
                  }}
                  color="dark"
                  variant="contained"
                >
                  {cancelButtonText}
                </UIButton>
                <UIButton
                  onClick={handleProceed}
                  sx={{
                    ml: 1,
                  }}
                  color="error"
                  variant="contained"
                >
                  {proceedButtonText}
                </UIButton>
              </FlexBox>
            }
            handleClose={toggleDialog}
            dialogTitle={dialogTitle}
            open={isDialogOpen}
          >
            {children}
          </CustomDialog>
        </>
      )}
    </DialogToggle>
  );
}
