// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const GetMessage = ({ show, text }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (show) {
//       setIsVisible(true);
//     }
//   }, [show]);

//   return (

//     <div className={`alert ${isVisible ? 'alert-info' : 'd-none'}`} role="alert">
//       <div>
//     <text>✅</text>
//     </div>
//       {text}
//     </div>
//   );



// };

// GetMessage.propTypes = {
//   show: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
// };

// export default GetMessage;
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const GetMessage = ({ show, text }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (show) {
//       setIsVisible(true);

//       // Hide the component after 5 seconds
//       const timeout = setTimeout(() => {
//         setIsVisible(false);
//       }, 3000);

//       // Cleanup the timeout on component unmount
//       return () => clearTimeout(timeout);
//     }
//   }, [show]);

//   return (
//     <div className={`alert ${isVisible ? 'alert-info' : 'd-none'}`} role="alert">
//       <div>
//         <span role="img" aria-label="check-mark">✅</span>
//       </div>
//       {text}
//     </div>
//   );
// };

// GetMessage.propTypes = {
//   show: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
// };

// export default GetMessage;

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './GetMessage.css'; // Import your custom CSS file for additional styling
// import '../../styles/chats.css'

// const GetMessage = ({ show, text }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (show) {
//       setIsVisible(true);
//       // ...
//     } else {
//       // ...
//     }
//   }, [show]);

//   useEffect(() => {
//     if (isVisible) {
//       const timeout = setTimeout(() => {
//         setIsVisible(false);
//       }, 5000);

//       return () => clearTimeout(timeout);
//     }
//   }, [isVisible]);

//   return (
//     <div className={`alert ${isVisible ? 'alert-info show' : 'd-none'}`} role="alert">
//       <div>
//         <span role="img" aria-label="check-mark">✅</span>
//       </div>
//       {text}
//     </div>
//   );
// };

// GetMessage.propTypes = {
//   show: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
// };

// export default GetMessage;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
 import '../../styles/chats.css'

const GetMessage = ({ show, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // ...
    } else {
      // ...
    }
  }, [show]);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div className="animation-container">
    <div className={`alert ${isVisible ? 'alert-info show' : 'alert-info hide'}`} role="alert">
        <span role="img" aria-label="check-mark">✅</span>
      {text}
    </div>
    </div>
  );
};

GetMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default GetMessage;




