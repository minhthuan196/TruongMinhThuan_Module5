import * as bookService from "../service/BookService"
import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function BookCreate() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    quantity: ""
                }}
                onSubmit={values => {
                    const create = async (book) => {
                        await bookService.save(book);
                        toast("add a new book successfully");
                        navigate('/');
                    }
                    create(values);
                }}>
                <Form>
                    <h1>Add a new Book</h1>
                    <Link to='/'>
                        <button type="button" className="btn btn-outline-primary">
                            Back Book List
                        </button>
                    </Link>
                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">Title</label>
                        <Field type="text" className="form-control" id="inputTitle"
                               name='title'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputQuantity" className="form-label">Quantity</label>
                        <Field type="number" className="form-control" id="inputQuantity"
                               name='quantity'/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default BookCreate;