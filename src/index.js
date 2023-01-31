import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Need this line for bootstrap css styles to work
import 'bootstrap/dist/css/bootstrap.min.css';
import {StoryProvider} from './contexts/StoryContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoryProvider>
    <App />
    </StoryProvider>
    
  </React.StrictMode>
);

