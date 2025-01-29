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

            <div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6 mb-5" key={item.id} >
                <a
                    className="book-container"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <div className="book">
                        <img alt="" src={item.image} />
                        <div id='overlay' className="card-body d-flex flex-column align-items-start justify-content-between pt-3">
                            <div>
                                <h5 className=" card-title text-white">{item.title}</h5>
                                <p className='text-white'>Author: {item.author}</p>
                                <p className=" card-text text-white">{item.abstract}</p>
                            </div>
                            <Link id='bookButton' to={`http://localhost:5173/${item.id}`} className=" btn ">Details</Link>
                        </div>
                    </div>
                </a>
            </div >


        ))

    )

}

export default CardComponent;