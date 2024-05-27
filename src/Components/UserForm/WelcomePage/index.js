import './welcome-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
function WelcomePage() {
    return (
        <div className="container-welcome-page">
            <h1> Welcome! Please take <br /> some time to fill up this <br /> form.</h1>
            <p>This will only take 2 minutes.</p>
            <div className="button-container">
                <button className="start-button">Let's Start
                 <FontAwesomeIcon icon={faArrowRight} className="button-icon" /> </button>
                
            </div>
        </div>)
};

export default WelcomePage;