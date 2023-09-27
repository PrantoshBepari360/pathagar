import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import contuct from "public/assets/contact.png";
import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccess(true);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                marginRight: 2,
                borderLeft: 1,
                borderRight: 2,
                borderBottom: 2,
                borderColor: "gray",
              }}
            >
              <Box
                sx={{
                  marginBottom: 5,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image src={contuct} width={400} alt="Contact Image" />
              </Box>
              <Box sx={{ marginBottom: 5, marginLeft: 4 }}>
                <h2 style={{ margin: 0, paddingBottom: 30 }}>
                  Address: 8th Flore, Good Center
                </h2>
                <h2 style={{ margin: 0, paddingBottom: 30 }}>
                  Phone: +88 01833-078059
                </h2>
                <h2 style={{ margin: 0 }}>
                  Email: bepariprantosh360@gmail.com
                </h2>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <Box
                sx={{
                  borderLeft: 2,
                  borderBottom: 2,
                  borderColor: "gray",
                }}
              >
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Name</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="name"
                    placeholder="Name"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Email</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Subject</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="subject"
                    placeholder="Subject"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Description:</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="message"
                    placeholder="Description"
                    multiline
                    rows={4}
                  />
                </Box>
                <Box sx={{ marginLeft: 4, marginY: 3 }}>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
            {success && (
              <div
                style={{
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 5,
                  fontSize: 28,
                  color: "white",
                  backgroundColor: "green",
                }}
              >
                Your message was sent Successfully.
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
