import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import './date-page.css';

function DatePage() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = date => {
        setSelectedDate(date);
    };

    return (
        <div className="container">
            <h1>Please select a date</h1>

            <div className="date-input-container">
                {/* <DatePicker */}
                    selected={selectedDate}
                    onChange={handleChange}
                    placeholderText="dd-mm-yyyy"
                    dateFormat="dd-MM-yyyy"
                    className="date-input"
                {/* /> */}
            </div>

            <div className="button-container">
                <button className="start-button">Next</button>
            </div>
        </div>
    );
}

export default DatePage;
