import React, { useState } from 'react';
import './user-form.css';
import FeedbackPage from './FeedbackPage';
import ThankYouPage from './ThankYouPage';
import WelcomePage from './WelcomePage';
import SingleInputPage from './SingleInputPage';
import MultiInputPage from './MultiInputPage';
import ContactNoPage from './ContactNoPage';
import SingleSelectPage from './SingleSelectPage';
import MultiSelectPage from './MultiSelectPage';
import DropdownListPage from './DropdownListPage';
import DatePage from './DatePage';
import SignaturePage from './SignaturePage';
import FileUploadPage from './FileUploadPage';

function UserForm() {
    const formComponents = {
        FeedbackPage: {
            component: FeedbackPage,
            description: "Component for collecting feedback",
        },
        ThankYouPage: {
            component: ThankYouPage,
            description: "Component for displaying a thank you message",
        },
        WelcomePage: {
            component: WelcomePage,
            description: "Component for displaying a welcome message",
        },
        SingleInputPage: {
            component: SingleInputPage,
            description: "Component for collecting a single input",
        },
        MultiInputPage: {
            component: MultiInputPage,
            description: "Component for collecting multiple inputs",
        },
        ContactNoPage: {
            component: ContactNoPage,
            description: "Component for collecting contact numbers",
        },
        SingleSelectPage: {
            component: SingleSelectPage,
            description: "Component for selecting a single option",
        },
        MultiSelectPage: {
            component: MultiSelectPage,
            description: "Component for selecting multiple options",
        },
        DropdownListPage: {
            component: DropdownListPage,
            description: "Component for selecting from a dropdown list",
        },
        DatePage: {
            component: DatePage,
            description: "Component for selecting a date",
        },
        SignaturePage: {
            component: SignaturePage,
            description: "Component for capturing a signature",
        },
        FileUploadPage: {
            component: FileUploadPage,
            description: "Component for uploading files",
        }
    };

    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

    const renderComponent = () => {
        const componentName = Object.keys(formComponents)[currentComponentIndex];
        const Component = formComponents[componentName].component;
        return <Component />;
    };

    const handleNext = () => {
        setCurrentComponentIndex(prevIndex => (prevIndex + 1) % Object.keys(formComponents).length);
    };

    const handlePrevious = () => {
        setCurrentComponentIndex(prevIndex => (prevIndex - 1 + Object.keys(formComponents).length) % Object.keys(formComponents).length);
    };

    return (
        <div className="container">
            {renderComponent()}

            <div className="powered-by-container">
                <button className="powered-by-button">Powered by <b>EasyForm</b></button>
            </div>

            <div className="arrow-buttons-container">
                <button className="arrow-button up-arrow" onClick={handlePrevious}>↑</button>
                <button className="arrow-button down-arrow" onClick={handleNext}>↓</button>
            </div>
        </div>
    );
}

export default UserForm;
