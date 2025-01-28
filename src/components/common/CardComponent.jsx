import axios from 'axios';
import { useState, useEffect } from 'react';

export const CardComponent = () => {

    const [data, setData] = useState([]);
    const apiUrlBook = "http://localhost:3000/books";

    useEffect(() => {
        axios.get(apiUrlBook).then((res) => {
            setData(res.data.items);
        })
            .catch((error) => {
                console.log(error, "errore nella ricerca dei libri");
            })
    }, []);


    return (

        data.map((item) => (
            <div className="col-2" key={item.id}>
                <div className="card mt-3 ">
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h5 className=" card-title">{item.title}</h5>
                        <p className=" card-text">{item.abstract}</p>
                        <a href="#" className=" btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        ))

    )

}