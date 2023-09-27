import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Location() {
  return (
    <Container>
        <Box sx={{ marginTop: 10 }}>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65917.01266068258!2d90.1154004734008!3d23.084764126933784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755699b96eeefab%3A0x87448fa52c571029!2z4Kan4Ka-4Kau4KeB4Ka44Ka-IOCmrOCnh-CmquCmvuCmsOCngCDgpqzgpr7gp5zgpr8!5e0!3m2!1sen!2sbd!4v1656664803781!5m2!1sen!2sbd"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  )
}
