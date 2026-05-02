import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <App />
          <Toaster />
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
