import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function Banner() {
  return (
    <Container>
      <AppBar>
        <Typography variant="h6" sx={{ textAlign: "center", paddingY: 2 }}>
          Contact Us
        </Typography>
      </AppBar>
      <Toolbar />
    </Container>
  );
}
