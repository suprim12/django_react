import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import axios from 'axios';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/book/");
                setBooks(res.data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetch();
    }, [setBooks]);
    return (
        <div>
            <Helmet>
                <title>HomePage - Test React App</title>
            </Helmet>
            HOME PAGE
            {books && books.map(book => (
                <h1 key={book}>{book}</h1>
            ))}
            <Link to="/about">Go to About</Link>
        </div>
    )
}

export default HomePage