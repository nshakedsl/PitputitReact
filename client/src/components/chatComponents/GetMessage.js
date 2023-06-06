import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GetMessage = ({ show, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  return (
    <div className={`alert ${isVisible ? 'alert-info' : 'd-none'}`} role="alert">
      {text}
    </div>
  );

  //     return (
//         <div class="alert alert-success d-flex align-items-center" role="alert">
//             <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill" /></svg>
//             <div>
//                 {text}
//             </div>
//         </div>


};

GetMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default GetMessage;



