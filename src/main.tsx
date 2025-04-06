import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css';
import './i18n';
import { ThemeProvider } from 'next-themes'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

