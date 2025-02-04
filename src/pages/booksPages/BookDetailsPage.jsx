import { useParams } from "react-router-dom"      // Dopo aver installato react-router-dom ci importiamo useParam per accedere ai parametri della url
import { useState, useEffect } from "react"      // Importiamo da react useState, useEffect ( hooks = funzioni gancio ).
import axios from "axios"                       // Importiamo la libreria axios per effettuare le richieste http verso il server.
import { FaUserAlt } from "react-icons/fa";

import FormComponent from "../../components/common/FormComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
import StarsReview from "../../components/common/StarsReview";



const BookDetailsPage = () => {
    const { id } = useParams(); // Ottiene l'ID del libro dai parametri dell'URL
    const [singleBook, setSingleBook] = useState([]); // Stato per memorizzare il libro e le recensioni

    useEffect(() => { // Funzione per ottenere i dettagli di un singolo libro
        axios.get(`http://localhost:3000/books/${id}`).then((res) => setSingleBook({ item: res.data.item, reviews: res.data.reviews }));
    }, [id]);


    const [hideDetails, setHideDetails] = useState("")
    const [showForm, setShowForm] = useState("")

    // SCRIPT PER ANIMAZIONE RELATIVA ALLA POSIZIONE DEL CURSORE
    // let lastMouseX = 0,
    //     lastMouseY = 0;
    // let rotX = 0,
    //     rotY = 0;

    // const setRotX = gsap.quickSetter(".button-3D", "rotationX");
    // const setRotY = gsap.quickSetter(".button-3D", "rotationY");

    // document.addEventListener("mousemove", mouseMoved);

    // function mouseMoved(ev) {
    //     var deltaX = ev.pageX - lastMouseX;
    //     var deltaY = ev.pageY - lastMouseY;

    //     lastMouseX = ev.pageX;
    //     lastMouseY = ev.pageY;

    //     rotY -= deltaX * 0.1;
    //     rotX += deltaY * 0.1;

    //     setRotX(rotX + 'deg');
    //     setRotY(rotY + 'deg');
    // }



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
                        {/* Immagine animata*/}
                        <div className="book-container col-sm-12 col-md-4" rel="noreferrer noopener">
                            <div className="book  text-center">
                                <img alt="" src={singleBook?.item?.image} />
                            </div>
                        </div>
                        {/* Testo */}
                        <div className="col-sm-12 col-md-8 ">
                            <div className="card-body h-100">
                                <h4 className="card-title">{singleBook?.item?.title}</h4>
                                <h5>Author: {singleBook?.item?.author}</h5>
                                <p className="card-text d-block">{singleBook?.item?.abstract}</p>
                                <p className="card-text d-block"><StarsReview vote={singleBook?.item?.vote_avarage} /></p>
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
                        return (
                            <div key={review.id} className=" rounded-3 bg-white d-flex flex-column my-2  p-0 col-12 " role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header rounded-2 p-2 ">
                                    <strong className="me-auto flex-column d-flex">
                                        <div className="text-white">
                                            <FaUserAlt style={{ fontSize: "25px", marginBottom: "5px", paddingRight: "10px", color: "white" }} /> Recensione di: {review.name}
                                        </div>
                                        <div>
                                            <StarsReview vote={review?.vote} />
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