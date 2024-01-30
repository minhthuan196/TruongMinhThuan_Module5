import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from "yup";
import {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import BookCreate from "./BookCreate";
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";

function BookList() {
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [bookToDelete, setBookToDelete] = useState(null);
    const handleShow = async (book) => {
        await setBookToDelete(book);
        setShow(true);
        console.log(book);
    };
    const handleDelete = async () => {
        try {
            await bookService.deleteBook(bookToDelete);
            toast("Edit successfully");
            const updatedBooks = await bookService.fillAll();
            setBooks(updatedBooks);
            handleClose();
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await bookService.fillAll();
                console.log(result);
                setBooks(result);
            } catch (e) {
                console.log(e);
            }
        }
        fetchApi();
    }, []);

    return (
        <>
            <h1>Library</h1>
            <Link to='/create'>
                <button type="button" className="btn btn-outline-success">
                    Add a new Book
                </button>
            </Link>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <Link to={`/edit/${book.id}`}>
                                    <button type="button" className="btn btn-outline-primary mx-2">Edit</button>
                                </Link>
                                <button type="button" className="btn btn-outline-danger"
                                        onClick={() => handleShow(book)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>{bookToDelete && `Do you want to delete ${bookToDelete.title} ?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookList;