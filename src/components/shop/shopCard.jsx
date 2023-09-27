import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function ShopCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/Book.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      {books?.map((book, index) => (
        <Grid xs={12} sm={12} md={6} lg={4} key={index}>
          <Box sx={{ width: "390px", height: "300px" }}>{book.title}</Box>
        </Grid>
      ))}
    </Grid>
  );
}
