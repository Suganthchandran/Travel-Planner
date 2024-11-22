import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';  // Only needed if you're using React Router

const VerifyEmailRedirect = () => {
  useEffect(() => {
    if (window.location.pathname === '/sign-up/verify-email-address') {
      window.location.replace('/verify');  // This will replace the current history entry
    }
  }, []);  // Empty dependency array to run only once when the component is mounted

  return (
    <div>
    <h1>Verify</h1>
    </div>
  )
       // No need to render anything
};

export default VerifyEmailRedirect;
