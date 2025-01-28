import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CardComponent = () => {

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
                <div className="card mt-3 position-relative t-0 l-0 border-0">
                    <img className="card-img-top rounded-0" src={item.image} alt="Card image cap" />
                    <div id='overlay' className=" h-100 card-body d-flex flex-column align-items-start position-absolute t-0 l-0 ">
                        <h5 className=" card-title text-white">{item.title}</h5>
                        <p className=" card-text text-white">{item.abstract}</p>
                        <Link to={`http://localhost:5173/${item.id}`} className=" btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div >
        ))

    )

}

export default CardComponent;