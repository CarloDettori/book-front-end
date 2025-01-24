import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Book() {
    const [data, setData] = useState([]);
    const apiUrlBook = "http://localhost:3000/books";

    useEffect(() => {
        axios.get(apiUrlBook).then((res) => {
            setData(res.data.results);
        })
            .catch((error) => {
                console.log(error, "errore nella ricerca dei libri");
            })
    }, []);
    return (
        <>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <h2>{item.title}</h2>
                        <h2>{item.author}</h2>
                        <p>{item.abstract}</p>
                        <img src={item.image} alt={item.title} />
                    </li>
                ))}
            </ul>
        </>
    )
}