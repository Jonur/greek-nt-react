import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/components/App';
import { ViewProvider } from 'src/state';
import './input.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </React.StrictMode>
);
