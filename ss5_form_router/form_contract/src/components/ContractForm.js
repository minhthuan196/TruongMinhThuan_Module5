import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useFormik} from "formik";
import * as Yup from 'yup';

const defaultTheme = createTheme();
const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name không được bỏ trống'),
    message: Yup.string().required('Message không được bỏ trống'),
    phone: Yup.string().required('Phone không được bỏ trống'),
    email: Yup.string().email('Email không đúng định dạng').required('email không được để trống'),
});

export default function SignIn() {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
        validationSchema:SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contract Form
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            autoComplete="name"
                            autoFocus
                            error={formik.touched && formik.errors.name}
                            helperText={formik.errors.name}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            autoComplete="email"
                            error={formik.touched && formik.errors.email}
                            helperText={formik.errors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            id="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            autoComplete="phone"
                            error={formik.touched && formik.errors.phone}
                            helperText={formik.errors.phone}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="message"
                            label="Message"
                            id="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            autoComplete="message"
                            error={formik.touched && formik.errors.message}
                            helperText={formik.errors.message}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}