import React, {JSX} from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../utils/useTheme';

const Tab = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="navbar">
        <NavLink to="/">
          <button 
            aria-label="All Todos"
            className={theme === "light" ? "light-button" : "dark-button"}
          > 
            All Todo
          </button>
        </NavLink>
        <NavLink to="/completed">
          <button 
            aria-label="Completed Todos"
            className={theme === "light" ? "light-button" : "dark-button"}
          >
            Completed
          </button>
        </NavLink>
        <NavLink to="/pending">
          <button 
            aria-label="Pending Todos"
            className={theme === "light" ? "light-button" : "dark-button"}
          >
            Pending
          </button>
        </NavLink>
        <button 
          onClick={toggleTheme}
          aria-label={`Theme ${theme}`}
          className={theme === "light" ? "light-button" : "dark-button"}
        >
          Toggle Theme ({theme})
        </button>
    </nav>
  );
};

export default Tab;
