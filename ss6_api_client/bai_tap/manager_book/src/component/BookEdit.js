import * as bookService from "../service/BookService";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function BookEdit() {
    const navigate = useNavigate();
    const id = useParams();
    const [book, setBook] = useState();
    useEffect(() => {
        const fetch = async () => {
            const book = await bookService.getBook(id);
            setBook(book);
            console.log(book)
        }
        fetch();
    }, [id]);
    if (!book) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id:book.id,
                    title: book.title,
                    quantity: book.quantity
                }}
                onSubmit={values => {
                    const edit = async (book) => {
                        await bookService.update(book);
                        toast("Edit successfully");
                        navigate('/');
                    }
                    edit(values);
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

export default BookEdit;