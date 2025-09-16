import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tab from './components/todos/Tab';
import Completed from './components/todos/Completed';
import Pending from './components/todos/Pending';
import ErrorBoundary from './ErrorBoundry';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

reportWebVitals(metric => {
  console.log("Web Vitals metric:", metric);
});
