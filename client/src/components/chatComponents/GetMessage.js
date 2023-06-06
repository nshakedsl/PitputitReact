import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/chats.css'

const GetMessage = ({ show, text, setShow }) => {

  useEffect(() => {
    if (show) {
      setShow(true);
      // ...
    } else {
      // ...
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false)
        setShow(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div className="animation-container">
      <div className={`alert ${show ? 'alert-info show' : 'alert-info hide'}`} role="alert">
        <span role="img" aria-label="check-mark">✅</span>
        {text}
      </div>
    </div>
  );
};



export default GetMessage;




