import React, { useState } from 'react';
import "./Button.css";


const ButtonExample = () => {
    const [isNoPressed, setIsNoPressed] = useState(false);
    const [pressCount, setPressCount] = useState(0); // Add pressCount state variable
    const [isElementsVisible, setIsElementsVisible] = useState(true); // Add isElementsVisible state variable

    const handleNoButtonClick = () => {
        if (pressCount < 20) { // Limit pressCount to 5
            setIsNoPressed(true);
            setPressCount(prevCount => prevCount + 1); // Increase pressCount by 1
        }
    };

    const handleYesButtonClick = () => {
        setPressCount(prevCount => prevCount + 1);
        setIsElementsVisible(false); // Hide elements when Yes button is clicked
    };

    const yesButtonStyle = {
        fontSize: isNoPressed ? `${16 * (pressCount + 1)}px` : '16px', // Update fontSize based on pressCount
    };

    const noButtonStyle = {
        fontSize: isNoPressed ? `${16 / (pressCount + 1)}px` : '16px', // Update fontSize based on pressCount
    }

    return (
        <div>
            {isElementsVisible && (
                <>
                    <button className="blank-button" style={noButtonStyle} onClick={handleNoButtonClick}>No</button>
                    <button className="blank-button" style={yesButtonStyle} onClick={handleYesButtonClick}>Yes</button>
                </>
            )}
            {!isElementsVisible && <p>Yippee</p>}
        </div>
    );
};

export default ButtonExample;
