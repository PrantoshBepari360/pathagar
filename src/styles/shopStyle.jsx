import { styled, alpha } from "@mui/material/styles";
import { Typography } from '@mui/material';
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: "1px solid black",
  borderRadius: 10,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: 20,
  },
}));

export const Separator = styled("div")(
  ({ theme }) => `
    height: ${theme.spacing(3)};
  `
);

export const SortWraper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid black",
  borderRadius: "10px 10px 0px 0px",
  padding: "10px 20px",
  backgroundColor: "#c9c9c9",
  fontSize: '18px',
  fontWeight: '500'
}));

export const WraperRadio = styled("div")(() => ({
  border: "1px solid black",
  borderTop: "0px",
  borderRadius: "0px 0px 10px 10px",
  padding: "10px 20px",
}));

export const WraperTypo = styled(Typography)(() => ({
  paddingTop: "10px",
  fontSize: '18px',
  fontWeight: '500'
}));
