import { useParams } from "react-router-dom"      // Dopo aver installato react-router-dom ci importiamo useParam per accedere ai parametri della url
import { useState, useEffect } from "react"      // Importiamo da react useState, useEffect ( hooks = funzioni gancio ).
import axios from "axios"                       // Importiamo la libreria axios per effettuare le richieste http verso il server.
import { FaUserAlt } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";



const BookDetailsPage = () => {
    const { id } = useParams(); // Ottiene l'ID del libro dai parametri dell'URL
    const [singleBook, setSingleBook] = useState([]); // Stato per memorizzare il libro e le recensioni

    useEffect(() => { // Funzione per ottenere i dettagli di un singolo libro
        axios.get(`http://localhost:3000/books/${id}`).then((res) => setSingleBook({ item: res.data.item, reviews: res.data.reviews }));
    }, [id]);

    const vote = singleBook?.item?.vote_avarage

    let starsBooks = []

    for (let index = 0; index < 5; index++) {
        if (starsBooks.length < vote) {
            starsBooks.push(<IoStarSharp key={index} style={{ color: "#f7af11", fontSize: "2rem" }} />)

        } else {
            starsBooks.push(<RiStarSLine key={index} style={{ color: "#f7af11", fontSize: "2rem" }} />)

        }
    }

    // STELLE USER TENTATIVO
    // const reviews = singleBook?.reviews
    // const starsUser = []

    // reviews?.forEach(review => {

    //     const stars = []
    //     for (let i = 0; i < 5; i++) {

    //         if (stars.length < review.vote) {
    //             stars.push(<IoStarSharp style={{ color: "#f7af11", fontSize: "2rem" }} />)
    //         } else {
    //             stars.push(<RiStarSLine style={{ color: "#f7af11", fontSize: "2rem" }} />)
    //         }
    //     }
    //     starsUser.push(stars)
    // });


    /* TENTATIVO-1 */let starsUser = []
    function starReviews(review) {
        const voteUser = review?.vote
        starsUser = []
        for (let index = 0; index < 5; index++) {
            if (starsUser.length < voteUser) {
                starsUser.push(<IoStarSharp key={index} style={{ color: "#f7af11", fontSize: "2rem" }} />)
            } else {
                starsUser.push(<RiStarSLine key={index} style={{ color: "#f7af11", fontSize: "2rem" }} />)
            }
        }
        return starsUser;
    }

    return (

        <div key={singleBook?.item?.id} className="container w-100 h-100 pt-4">

            {/* Card principale con i dettagli del libro */}
            <div className="card">
                <div className="row g-0">
                    <div className="col-2">
                        <img src={singleBook?.item?.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{singleBook?.item?.title}</h4>
                            <h5>Author: {singleBook?.item?.author}</h5>
                            <p className="card-text">{singleBook?.item?.abstract}</p>
                            <p className=" card-text">{starsBooks}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista delle recensioni */}
            <div>
                {singleBook?.reviews?.map((review, {/* TENTATIVO-2 index */ }) => {
                    {/* TENTATIVO-1 */ starReviews(review) }
                    return (
                        <div key={review.id} className="d-block toast w-100 my-2" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">
                                    <FaUserAlt style={{ fontSize: "25px", marginBottom: "5px", paddingRight: "10px" }} /> Recensione di: {review.name}{/* TENTATIVO-1 */ starsUser}{/* TENTATIVO-2 {starsUser[index]} */}
                                </strong>
                                <small className="text-body-secondary">11 mins ago</small>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">{review.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BookDetailsPage;