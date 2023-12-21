import React, { useState } from 'react';
import './shop.css';

function Button({ content, buttonText }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button className="shop-button" onClick={openPopup}>{buttonText}</button>
      {isPopupOpen && (
        <div className="shoppopup-background" onClick={closePopup}>
          <div className="shoppopup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-content">
              {content}
              <button onClick={closePopup} className='close-button'>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;





