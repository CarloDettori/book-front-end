import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialReview = {
    name: "",
    text: "",
    vote: "",
};

export default function FormComponent({ overlay }) {
    const { id } = useParams();

    const [userReview, setUserReview] = useState(initialReview);
    const [reviewList, setReviewList] = useState([]);


    function sendData() {
        axios.post(`http://localhost:3000/books/reviews/${id}`, userReview)
            .then((res) => {
                console.log(res.data);
                setReviewList([...reviewList, userReview]);
            })
            .catch((err) => console.log(err))
            .finally(() => {
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendData();
        setUserReview(initialReview);
        window.location.reload();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        //console.log(`Updating ${name} to ${value}`);
        setUserReview({
            ...userReview,
            [name]: value,
        });
    }

    return (
        <div className={`${overlay} overlayForm  position-absolute t-0 l-0 w-100 h-100 d-flex justify-content-center flex-column align-items-center`}>
            <form onSubmit={handleSubmit} className="w-50">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="name"
                        placeholder="Enter your name"
                        value={userReview.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="text"
                        rows="3"
                        placeholder="Enter your review"
                        value={userReview.text}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        name="vote"
                        placeholder="Enter your vote from 1 to 5"
                        value={userReview.vote}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}
