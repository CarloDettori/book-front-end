import { Link } from 'react-router-dom';

const CardComponent = ({ book }) => {

    return (

        <div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6 mb-5" key={book.id} >
            <div className="book-container" rel="noreferrer noopener">
                <div className="book">
                    <img alt="" src={book.image} />
                    <div id='overlay' className="card-body d-flex flex-column align-items-start justify-content-between pt-3">
                        <div>
                            <h5 className=" card-title text-white">{book.title}</h5>
                            <hr style={{ color: "white", border: "3px solid white" }} />
                            <p className='text-white'>Author: {book.author}</p>
                            <p className=" card-text text-white">{book.abstract.substring(0, 40)}...</p>
                        </div>
                        <Link id='bookButton' to={`http://localhost:5173/books/${book.id}`} className=" btn ">Details</Link>
                    </div>
                </div>
            </div>
        </div >

    )

}

export default CardComponent;