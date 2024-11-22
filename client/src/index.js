import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, RedirectToSignUp } from '@clerk/clerk-react';
import { FavouriteProvider } from './context/FavouriteContext';

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
    <ClerkProvider publishableKey={clerkFrontendApi} debug={true} >
      <FavouriteProvider>
        <App />
      </FavouriteProvider>
    </ClerkProvider>
      </BrowserRouter>
  </React.StrictMode>
);
