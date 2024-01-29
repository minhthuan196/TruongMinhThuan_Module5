import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ErrorMessage, Field, Form, Formik} from "formik";

import * as Yup from "yup";

function MedicalForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    cmnd: '',
                    birthDate: '',
                    gender: '',
                    country: '',
                    company: '',
                    part: '',
                    medicalCard: '',
                    city: '',
                    district: '',
                    ward: '',
                    address: '',
                    phone: '',
                    email: '',
                    ask1: '',
                    ask2: [],
                    ask3: []
                }
                }
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng phải nhập tên"),
                    cmnd: Yup.string()
                        .required("Vui lòng phải nhập cmnd/ hộ chiếu"),
                    birthDate: Yup.number()
                        .required("Năm sinh không được để trống")
                        .typeError("Vui lòng phải nhập số")
                        .min(1991, 'Năm sinh phải lớn hơn 1990'),
                    country:Yup.string()
                        .required("Vui lòng nhập quốc gia"),
                    company:Yup.string()
                        .required("Vui lòng nhập công ty làm việc"),
                    part:Yup.string()
                        .required("Vui lòng nhập Bộ phận làm việc"),
                    city:Yup.string()
                        .required("Vui lòng nhập Tỉnh thành"),
                    district:Yup.string()
                        .required("Vui lòng nhập Quận/Huyện"),
                    ward:Yup.string()
                        .required("Vui lòng nhập Phường/Xã"),
                    address:Yup.string()
                        .required("Vui lòng nhập Số nhà, phố, tổ dân phố/thôn/đội"),
                    phone:Yup.number()
                        .required("Vui lòng nhập số điện thoại")
                        .typeError("Vui lòng nhập số"),
                    email:Yup.string()
                        .required("Vui lòng nhập email")
                        .matches(/[a-zA-Z0-9]@[a-zA-Z0-9]/,'Vui lòng nhập đúng định dạng abc@gmail.com')

                })}
                onSubmit={values => {
                    alert("Submit success!!!!!!!!!!!!")
                    console.log(values);
                }
                }
            >
                <div className='container'>
                    <h1>Tờ khai y tế</h1>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Họ tên</label>
                            <Field type="text" className="form-control" id="inputName"
                                   name='name'/>
                            <ErrorMessage name='name' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCmnd" className="form-label">Số hộ chiếu/CMND</label>
                            <Field type="text" className="form-control" id="inputCmnd"
                                   name='cmnd'/>
                            <ErrorMessage name='cmnd' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputBirthDay" className="form-label">Năm sinh</label>
                            <Field type="number" className="form-control" id="inputBirthDay"
                                   name='birthDate'/>
                            <ErrorMessage name='birthDate' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <p>Giới tính</p>
                            <div className="form-check">
                                <Field className="form-check-input" type="radio"
                                       id="flexRadioDefault1"
                                       value='1'
                                       name='gender'/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Nam
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="radio"
                                       id="flexRadioDefault2"
                                       value="0"
                                       name='gender'/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Nữ
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCountry" className="form-label">Quốc gia</label>
                            <Field type="text" className="form-control" id="inputCountry"
                            name='country'/>
                            <ErrorMessage name='country' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCompany" className="form-label">Công ty làm việc</label>
                            <Field type="text" className="form-control" id="inputCompany"
                            name='company'/>
                            <ErrorMessage name='company' component='span' className='form-err'/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPart" className="form-label">Bộ phận làm việc</label>
                            <Field type="text" className="form-control" id="inputPart"
                            name='part'/>
                            <ErrorMessage name='part' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3 form-check">
                            <Field type="checkbox" className="form-check-input" id="exampleCheck1"
                            name ='medicalCard'
                            value='medicalCard'/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Có thẻ bảo hiểm y tế</label>
                        </div>
                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <div className="mb-3">
                            <label htmlFor="inputCity" className="form-label">Tỉnh thành</label>
                            <Field type="text" className="form-control" id="inputCity"
                            name='city'/>
                            <ErrorMessage name='city' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDistrict" className="form-label">Quận/Huyện</label>
                            <Field type="text" className="form-control" id="inputDistrict"
                            name='district'/>
                            <ErrorMessage name='district' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputWard" className="form-label">Phường/Xã</label>
                            <Field type="text" className="form-control" id="inputWard"
                            name='ward'/>
                            <ErrorMessage name='ward' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputAddress" className="form-label">Số nhà, phố, tổ dân
                                phố/thôn/đội</label>
                            <Field type="text" className="form-control" id="inputAddress"
                            name='address'/>
                            <ErrorMessage name='address' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPhone" className="form-label">Điện thoại</label>
                            <Field type="text" className="form-control" id="inputPhone"
                            name='phone'/>
                            <ErrorMessage name='phone' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <Field type="email" className="form-control" id="inputEmail"
                                   name='email'/>
                            <ErrorMessage name='email' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputMessage1" className="form-label">
                                Trong vòng 14 ngày qua,Anh/Chị có đến quốc gia /Vùng lãnh thổ nào(Có thể đi qua nhiều
                                quốc gia)
                            </label>
                            <Field as='textarea'  className="form-control" id="inputMessage1"
                                   name='ask1'/>
                            <ErrorMessage name='ask1' component='span' className='form-err'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputMessage1" className="form-label">
                                Trong vòng 14 ngày qua,Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không ?
                            </label>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox"  id="flexCheckDefault"
                                       value="Sốt"
                                       name='ask2'/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Sốt
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked"
                                       value="Ho"
                                       name='ask2'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Ho
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked1"
                                       value="Khó thở"
                                       name='ask2'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked1">
                                    Khó thở
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked2"
                                       value="Viên phổi"
                                       name='ask2'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked2">
                                    Viên phổi
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked3"
                                       value="Đau họng"
                                       name='ask2'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked3">
                                    Đau họng
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked4"
                                       value="Mệt mỏi"
                                       name='ask2'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked4">
                                    Mệt mỏi
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputMessage1" className="form-label">
                                Trong vòng 14 ngày qua,Anh/Chị có tiếp xúc với?
                            </label>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckDefault1"
                                       value="Người bệnh hoặc nghi ngờ mắc bệnh COVIC-19"
                                       name='ask3'/>
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    Người bệnh hoặc nghi ngờ mắc bệnh COVIC-19
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked5"
                                       value="Người từ nước có bệnh COVIC-19"
                                       name='ask3'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked5">
                                    Người từ nước có bệnh COVIC-19
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" id="flexCheckChecked6"
                                       value="Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)"
                                       name='ask3'/>
                                <label className="form-check-label" htmlFor="flexCheckChecked6">
                                    Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </div>
            </Formik>

        </>
    )
}

export default MedicalForm;