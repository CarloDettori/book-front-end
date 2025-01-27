import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { FaUserAlt } from "react-icons/fa";


export default function BookDetailsPage() {

    const { id } = useParams()
    const [singleBook, setSingleBook] = useState([])

    function getSingleBook() {
        axios.get(`http://localhost:3000/books/${id}`).then((res) => {
            setSingleBook({ item: res.data.item, reviews: res.data.reviews });
        })

    }

    useEffect(getSingleBook, [id])



    return (


        <div className="container w-100 h-100 pt-4">
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
                        </div>
                    </div>
                </div>
            </div>



            <div>
                {singleBook?.reviews?.map((review) => {
                    return (

                        <div key={review.id} className="d-block toast w-100 my-2" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">
                                    <FaUserAlt style={{ fontSize: "25px", marginBottom: "5px", paddingRight: "10px" }} /> Recensione di: {review.name}
                                </strong>
                                <small className="text-body-secondary"> 11 mins ago </small>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                {review.text}
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>



    )
}