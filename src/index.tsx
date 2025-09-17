import React, { JSX, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tab from './components/todos/Tab';
// import Completed from './components/todos/Completed';
// import Pending from './components/todos/Pending';
import ErrorBoundary from './ErrorBoundary';
import { ThemeProvider } from './utils/ThemeContext';

const AppIndex = (): JSX.Element => {
  const Completed = lazy(() => import('./components/todos/Completed'));
  const Pending = lazy(() => import('./components/todos/Pending'))
  return (
    <React.StrictMode>
      <ThemeProvider>
        <ErrorBoundary fallback={<h2>⚠️ Something went wrong. Please try again later.</h2>}>
          <Router>
            <Tab />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/pending" element={<Pending />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppIndex />);

reportWebVitals(metric => {
  console.log("Web Vitals metric:", metric);
});
