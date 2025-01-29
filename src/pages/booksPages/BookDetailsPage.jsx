import { useParams } from "react-router-dom"      // Dopo aver installato react-router-dom ci importiamo useParam per accedere ai parametri della url
import { useState, useEffect } from "react"      // Importiamo da react useState, useEffect ( hooks = funzioni gancio ).
import axios from "axios"                       // Importiamo la libreria axios per effettuare le richieste http verso il server.
import { FaUserAlt } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import FormComponent from "../../components/common/FormComponent";
import gsap from "gsap";
import { TweenLite } from "gsap/gsap-core";



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

    const [hideDetails, setHideDetails] = useState("")
    const [showForm, setShowForm] = useState("")

    // SCRIPT PER ANIMAZIONE RELATIVA ALLA POSIZIONE DEL CURSORE
    let lastMouseX = 0,
        lastMouseY = 0;
    let rotX = 0,
        rotY = 0;

    const setRotX = gsap.quickSetter(".button-3D", "rotationX");
    const setRotY = gsap.quickSetter(".button-3D", "rotationY");

    document.addEventListener("mousemove", mouseMoved);

    function mouseMoved(ev) {
        var deltaX = ev.pageX - lastMouseX;
        var deltaY = ev.pageY - lastMouseY;

        lastMouseY = ev.pageX;
        lastMouseX = ev.pageY;

        rotY -= deltaX * 0.1;
        rotX += deltaY * 0.1;

        setRotX(rotX - 'deg');
        setRotY(rotY - 'deg');
    }



    return (
        <>

            <FormComponent overlay={showForm} />

            <div key={singleBook?.item?.id} className={`container ${hideDetails} `}> {/* Card principale con i dettagli del libro */}
                <div className="card mt-5 p-3">
                    <div className="row g-0 align-items-center">
                        {/* Immagine */}
                        {/* <div className="col-sm-12 col-md-4 text-center">
                            <img src={singleBook?.item?.image} className="img-fluid rounded-start" alt="Book Cover" />
                        </div> */}
                        <div className="button-3D col-sm-12 col-md-4 text-center">
                            <div className="pane pane-front">
                                <img src={singleBook?.item?.image} className="img-fluid rounded-start" alt="Book Cover" />
                            </div>
                            <div className="pane pane-right"></div>
                            <div className="pane pane-left"></div>
                            <div className="pane pane-top"></div>
                            <div className="pane pane-bottom"></div>
                        </div>
                        {/* Testo */}
                        <div className="col-sm-12 col-md-8 ">
                            <div className="card-body h-100">
                                <h4 className="card-title">{singleBook?.item?.title}</h4>
                                <h5>Author: {singleBook?.item?.author}</h5>
                                <p className="card-text d-block">{singleBook?.item?.abstract}</p>
                                <p className="card-text d-block">{starsBooks}</p>
                                <button
                                    onClick={() => { setShowForm("overlayFormActive"); setHideDetails("hideContent") }}
                                    className="btn btn-dark">
                                    Leave a review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Lista delle recensioni */}

                <div className="col mt-4">

                    {singleBook?.reviews?.map((review) => {
                        {/* TENTATIVO-1 */ starReviews(review) }
                        return (

                            <div key={review.id} className=" rounded-3 bg-white d-flex flex-column my-2  p-0 col-12 " role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header rounded-2 p-2 ">
                                    <strong className="me-auto flex-column d-flex">
                                        <div className="text-white">
                                            <FaUserAlt style={{ fontSize: "25px", marginBottom: "5px", paddingRight: "10px", color: "white" }} /> Recensione di: {review.name}
                                        </div>
                                        <div>
                                            {/* TENTATIVO-1 */ starsUser}{/* TENTATIVO-2 {starsUser[index]} */}
                                        </div>
                                    </strong>
                                    <small className=" text-white px-3">11 mins ago</small>
                                    <button type="button" className="bg-white btn-close mx-2" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body p-2">{review.text}</div>
                            </div>
                        )
                    })}

                </div>
            </div >
        </>
    );
};

export default BookDetailsPage;