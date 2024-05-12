import './welcome-page.css';
function WelcomePage() {
    return (
        <div className="container">
            <h1>Welcome! Please take some time to fill up this form.</h1>
            <p>This will only take 2 minutes.</p>
            <div className="button-container">
                <button className="start-button">Let's Start </button>
                <p>press Enter</p>
            </div>
        </div>)
};

export default WelcomePage;