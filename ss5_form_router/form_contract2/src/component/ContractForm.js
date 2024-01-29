import 'bootstrap/dist/css/bootstrap.min.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import * as Yup from "yup";
import {ColorRing} from "react-loader-spinner";

function ContractForm() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Name bắt buộc phải nhập'),
                        email: Yup.string()
                            .required("Email bắt buộc phải nhập")
                            .matches(/[a-zA-Z0-9]@[a-zA-Z0-9]/,
                                "Vui lòng nhập đúng định dạng ex: abc@gmail.com"),
                        phone: Yup.number()
                            .typeError('Vui lòng nhập một số')
                            .required("Number bắt buộc phải nhập"),
                        message: Yup.string()
                            .required("Message bắt buộc phải nhập")
                    })}
                    onSubmit={(values,{setSubmitting}) => {
                        setTimeout(() =>{
                            setSubmitting(false);
                            toast("Submit success!");
                            console.log(values);
                        },2000)
                    }}
            >
                {
                    ({isSubmitting})=>(
                        <div className='container'>
                            <h1>Contract Form</h1>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-label">Name</label>
                                    <Field type="text" className="form-control" id="inputName"
                                           name='name'
                                    />
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <Field type="email" className="form-control" id="inputEmail"
                                           name='email'/>
                                    <ErrorMessage name='email' component='span' className='form-err'/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                                    <Field type="text" className="form-control" id="inputPhone"
                                           name='phone'/>
                                    <ErrorMessage name='phone' component='span' className='form-err'/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputMessage" className="form-label">Message</label>
                                    <Field as='textarea' type="text" className="form-control" id="inputMessage"
                                           name='message'/>
                                    <ErrorMessage name='message' component='span' className='form-err'/>


                                </div>
                                {isSubmitting?
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="color-ring-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="color-ring-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                    :<button type="submit" className="btn btn-primary">Submit</button>}

                            </Form>
                        </div>

                    )
                }
            </Formik>
            <ToastContainer/>

        </>
    )
}

export default ContractForm;