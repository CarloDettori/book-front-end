import { useState } from "react";

const initialReview = {
    name: "",
    review: "",
    vote: "",
};
export default function FormComponent() {
    const [userReview, setUserReview] = useState(initialReview);
    const [reviewList, setReviewList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setReviewList([...reviewList, userReview]);
        setUserReview(initialReview);
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
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="review" className="form-label">Review</label>
                <textarea
                    className="form-control"
                    id="review"
                    name="review"
                    rows="3"
                    placeholder="Enter your review"
                    value={userReview.review}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Vote</label>
                <input
                    type="number"
                    className="form-control"
                    id="vote"
                    name="vote"
                    placeholder="Enter your vote"
                    value={userReview.vote}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
