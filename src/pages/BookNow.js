import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const serviceOptions = [
  'Handyman Repairs',
  'Plumbing Services',
  'Electrical Work',
  'HVAC Maintenance',
  'Painting & Carpentry',
  'Emergency Services',
];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
];

const BookNow = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: null,
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newDate) => {
    setForm({ ...form, date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Booking submitted. We will contact you shortly.');
  };

  return (
    <Container sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom align="center">
          Book a Service
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Please fill in the form below to schedule your preferred service.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="name"
            label="Full Name"
            fullWidth
            required
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            name="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            required
            value={form.phone}
            onChange={handleChange}
          />
          <TextField
            name="service"
            label="Service Required"
            select
            fullWidth
            required
            value={form.service}
            onChange={handleChange}
          >
            {serviceOptions.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Preferred Date"
              value={form.date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField required fullWidth {...params} />}
            />
          </LocalizationProvider>

          <TextField
            name="time"
            label="Preferred Time Slot"
            select
            fullWidth
            required
            value={form.time}
            onChange={handleChange}
          >
            {timeSlots.map((slot, i) => (
              <MenuItem key={i} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            name="message"
            label="Additional Notes"
            multiline
            rows={3}
            fullWidth
            value={form.message}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained" color="primary" size="large">
            Submit Booking
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookNow;
