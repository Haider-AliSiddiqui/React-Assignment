// Note: App component
import React from 'react';
import { BrowserRouter } from 'react-router';
import AppRoutes from './utills/routes/routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
