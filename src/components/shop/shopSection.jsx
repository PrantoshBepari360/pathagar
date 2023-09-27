import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ShopCard from "./shopCard";
import { ShopSideBar } from "./shopSideBar";

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

export default function ShopSection() {
  return (
    <>
      <Container>
        <Separator />
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <ShopSideBar />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <ShopCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
