
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import './src/index.css';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <DataProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </DataProvider>
    </LanguageProvider>
  </React.StrictMode>
);
