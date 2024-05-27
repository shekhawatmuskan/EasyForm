import './thank-you-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function ThankYouPage() {
    return (
        <div className="container-thankyou-page">
            <h1>Thank you for submitting  <br /> this form.</h1>
            <p>You may now close this window.</p>
            <div className="button-container">
                <button className="create-your-own-button">Create your own EasyForm
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" /> </button>


            </div>
        </div>)
};
export default ThankYouPage;
