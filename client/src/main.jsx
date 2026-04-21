import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes/router.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
      <ThemeProvider>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
              <ToastContainer />
            </QueryClientProvider>
          </HelmetProvider>
        </ThemeProvider>
      </AuthProvider>
  </StrictMode>
);
