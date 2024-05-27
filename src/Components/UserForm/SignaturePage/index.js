import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './signature-page.css';

function SignaturePage() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);
    const [isSignature, setIsSignature] = useState(false);

    const clearSignature = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setIsSignature(false);
    };

    const startDrawing = (e) => {
        setIsDrawing(true);
        setIsSignature(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        setLastX(x);
        setLastY(y);
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        ctx.lineTo(x, y);
        ctx.stroke();
        setLastX(x);
        setLastY(y);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    return (
        <div className="container-signature-page">
            <h1>Please sign here *</h1>
            <canvas
                ref={canvasRef}
                className="signature-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                width="500"
                height="250"
                style={{
                    touchAction: 'none',
                    userSelect: 'none',
                    border: '2px solid #000', // border style
                    borderRadius: '5px', // rounded corners
                }}
            >
                Please sign...
            </canvas>
            <div className="button-container">
                <button className="next-button">
                    Next
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
                </button>
                {isSignature && (
                    <button className="clear-button" onClick={clearSignature}>
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}

export default SignaturePage;
