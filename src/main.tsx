import ReactDOM from 'react-dom/client';

import App from 'src/components/App';
import { DataProvider, ViewProvider } from 'src/state';
import './input.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ViewProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </ViewProvider>
);
