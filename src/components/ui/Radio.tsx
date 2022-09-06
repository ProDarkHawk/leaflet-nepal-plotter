import { FormControlLabel, Radio } from "@mui/material";

interface CustomRadioProps {
  label: string;
  value: string;
}

const UIRadio = ({ label, value }: CustomRadioProps) => {
  return (
    <FormControlLabel
      sx={{
        px: 1,
      }}
      value={value}
      control={<Radio />}
      label={label}
    />
  );
};

export default UIRadio;
