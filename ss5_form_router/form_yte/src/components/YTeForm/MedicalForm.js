import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const defaultTheme = createTheme();
const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    birthDay: Yup.number().min(1991, '>1990'),
    national: Yup.string().required('Required'),
    company: Yup.string().required('Required'),
    parts: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    ward: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    cmnd: Yup.string().required('Required'),
});

export default function MedicalForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            cmnd: '',
            birthDay: '',
            national: '',
            company: '',
            parts: '',
            city: '',
            district: '',
            ward: '',
            address: '',
            phone: '',
            email: '',

        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert("Khai báo thành công");
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Tời khai y tế
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{mt: 1}}>
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
                            name="cmnd"
                            label="CMND"
                            id="cmnd"
                            value={formik.values.cmnd}
                            onChange={formik.handleChange}
                            autoComplete="cmnd"
                            error={formik.touched && formik.errors.cmnd}
                            helperText={formik.errors.cmnd}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="birthDay"
                            label="Năm sinh"
                            type="number"
                            id="birthDay"
                            value={formik.values.birthDay}
                            onChange={formik.handleChange}
                            autoComplete="birthDay"
                            error={formik.touched && formik.errors.birthDay}
                            helperText={formik.errors.birthDay}
                        />
                        <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio/>} label="Nam"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Nữ"/>
                        </RadioGroup>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="national"
                            label="Quốc tịch"
                            type="text"
                            id="national"
                            value={formik.values.national}
                            onChange={formik.handleChange}
                            autoComplete="national"
                            error={formik.touched && formik.errors.national}
                            helperText={formik.errors.national}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="company"
                            label="Công ty làm việc"
                            type="text"
                            id="company"
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            autoComplete="company"
                            error={formik.touched && formik.errors.company}
                            helperText={formik.errors.company}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="parts"
                            label="Bộ phận làm việc"
                            type="text"
                            id="parts"
                            value={formik.values.parts}
                            onChange={formik.handleChange}
                            autoComplete="parts"
                            error={formik.touched && formik.errors.parts}
                            helperText={formik.errors.parts}
                        />
                        <FormControlLabel control={<Checkbox />} label="Có thể bảo hiểm y tế"/>
                        <h2>Đia chỉ liên lạc tại Việt Nam</h2>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="city"
                            label="Tỉnh thành"
                            type="text"
                            id="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            autoComplete="city"
                            error={formik.touched && formik.errors.city}
                            helperText={formik.errors.city}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="district"
                            label="Quận/Huyện"
                            type="text"
                            id="district"
                            value={formik.values.district}
                            onChange={formik.handleChange}
                            autoComplete="district"
                            error={formik.touched && formik.errors.district}
                            helperText={formik.errors.district}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="ward"
                            label="Phường/Xã"
                            type="text"
                            id="ward"
                            value={formik.values.ward}
                            onChange={formik.handleChange}
                            autoComplete="ward"
                            error={formik.touched && formik.errors.ward}
                            helperText={formik.errors.ward}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="address"
                            label="Số nhà"
                            type="text"
                            id="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            autoComplete="address"
                            error={formik.touched && formik.errors.address}
                            helperText={formik.errors.address}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Điện thoại"
                            type="text"
                            id="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            autoComplete="address"
                            error={formik.touched && formik.errors.phone}
                            helperText={formik.errors.phone}
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
                        <h3>Trong vòng 14 ngày qua,
                            Anh chị có đến quốc gia/vùng lãnh thổ nào( Có thể đi qua nhiều quốc gia)</h3>
                        <TextField
                            margin="normal"
                            fullWidth
                        />
                        <h3>Trong 14 ngày qua, Anh chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h3>
                        <FormControlLabel control={<Checkbox/>} label="Sốt"/>
                        <FormControlLabel control={<Checkbox/>} label="Ho"/>
                        <FormControlLabel control={<Checkbox/>} label="Khó thở"/>
                        <FormControlLabel control={<Checkbox/>} label="Viêm phổi"/>
                        <FormControlLabel control={<Checkbox/>} label="Đau họng"/>
                        <FormControlLabel control={<Checkbox/>} label="Mệt mõi"/>
                        <h3>Trong 14 ngày qua, Anh chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h3>
                        <FormControlLabel control={<Checkbox/>} label="Người bệnh hoặc nghi ngờ, mắc bệnh COVIC-19"/>
                        <FormControlLabel control={<Checkbox/>} label="Người bệnh từ nước bệnh COVIC-19"/>
                        <FormControlLabel control={<Checkbox/>} label="Người có  biêu hiện(Sốt,ho,khó thở,viêm phổi)"/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Khai báo
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
