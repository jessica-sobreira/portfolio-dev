import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './pages/router';
import { RouterProvider } from 'react-router';

import './styles/main.sass';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)