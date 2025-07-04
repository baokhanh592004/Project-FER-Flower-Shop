// src/pages/Contact.jsx

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Import các component từ Material UI {/* là một tờ giấy gọi món menu :)))  */}
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Typography,
  Container,
  Paper,
  Box,
} from '@mui/material';

export default function Contact() {
  // 1. Định nghĩa Schema Validation bằng Yup
  // để dùng bộ quy tắc kiểm tra giữ liệu 
  // III. anh bồi bàn liếc qua vần kiểm tra xem khách có điền đúng thông tin không, nếu không thì sẽ hiện lỗi ở dưới input
  //   nếu đúng thì sẽ đưa tờ giấy đó đi gửi cho bếp :3
  const validationSchema = Yup.object({
    name: Yup.string() 
      .required('Required.') //bắt buộc phải nhập ko nhập thì bye bye :) 
      .min(2, 'Must be 2 characters or more'),
    email: Yup.string()
      .required('Required.')
      .email('Invalid email address'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Please enter a valid number")
      .required('Required.'),
    program: Yup.string()
      .required('Please select a program.')
      .notOneOf(['0'], 'Please select a program.'), // Đảm bảo không chọn giá trị mặc định
    message: Yup.string()
      .required('Required.')
      .min(10, 'Must be 10 characters or more'),
    agree: Yup.boolean()
      .oneOf([true], 'The terms and conditions must be accepted.'),
  });

  // 2. Sử dụng hook useFormik để quản lý form state và validation
  //cần biết các trường quản lý ngay từ đâuf  
    // II. anh bồi bàn ảnh đi đưa khách tờ giấy trống xong initVal ghi lại ở handle change xong cầm đi SUbmit :3
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: '0', // Dùng string '0' để khớp với value của MenuItem
      message: '',
      agree: false,
    },
    // IV anh bồi bàn gửi đi rồi đó k
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // 3. Xử lý khi submit form
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          Contact Us
        </Typography>
        
        {/* Dùng thẻ Box thay cho form để có thể dùng sx prop của MUI */} 
        
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            fullWidth
            margin="normal"
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Quan trọng cho validation khi người dùng rời khỏi input
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            margin="normal"
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />

          <FormControl fullWidth margin="normal" error={formik.touched.program && Boolean(formik.errors.program)}>
            <InputLabel id="program-label">Program of Study</InputLabel>
            <Select
              labelId="program-label"
              id="program"
              name="program"
              label="Program of Study"
              value={formik.values.program}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="0"><em>Please select</em></MenuItem>
              <MenuItem value="Software Engineering">Software Engineering</MenuItem>
              <MenuItem value="Information System">Information System</MenuItem>
              <MenuItem value="Information Assurance">Information Assurance</MenuItem>
              <MenuItem value="Internet of Things">Internet of Things</MenuItem>
              <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
              <MenuItem value="Digital Art & Design">Digital Art & Design</MenuItem>
            </Select>
            {formik.touched.program && formik.errors.program && (
              <Typography variant="caption" color="error" sx={{ ml: 2 }}>
                {formik.errors.program}
              </Typography>
            )}
          </FormControl>
          
          <TextField
            fullWidth
            margin="normal"
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <FormControlLabel
            control={
              <Switch
                name="agree"
                checked={formik.values.agree}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="Agree to terms and conditions."
          />
          {formik.touched.agree && formik.errors.agree && (
            <Typography variant="caption" color="error" display="block">
              {formik.errors.agree}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}