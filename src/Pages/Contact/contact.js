import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
  marginBottom: '20px'
});

const StyledButton = styled(Button)({
  marginTop: '10px',
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#115293'
  }
});

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Contact us !
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1">
              <Phone /> Cell-phone: 0123-456-789
            </Typography>
            <Typography variant="body1">
              <Email /> Email: contact@shop.com
            </Typography>
            <Typography variant="body1">
              <LocationOn /> Address: 123 ABC Street, District XYZ, HCM City
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Send us your feedback !
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                label="Your name"
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Your Email"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                type="email"
              />
              <TextField
                label="Your Message"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <StyledButton variant="contained" type="submit" fullWidth>
                Confirm
              </StyledButton>
            </form>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
