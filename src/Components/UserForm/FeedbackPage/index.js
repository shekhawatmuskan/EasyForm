import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './feedback-page.css';


function FeedbackPage() {
    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(false);

    const handleRatingClick = (newRating) => {
        setRating(newRating);
        setRated(true);
    };

    const handleNextClick = () => {
        // Handle the next action, such as navigating to the next page
        console.log("Next button clicked!");
    };
    return (
        <div className="container-feedback-page">
            <h1>Please give us a rating.</h1>
            <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        className={index < rating ? "star-button filled" : "star-button"}
                        onClick={() => handleRatingClick(index + 1)}
                    >
                        &#9733;
                    </button>
                ))}
            </div>
            {rated && <p>You rated: {rating} stars</p>}
            <div className="button-container">
                <button className="next-button" onClick={handleNextClick}>Next
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" /></button>

            </div>
        </div>
    )
}
export default FeedbackPage;
