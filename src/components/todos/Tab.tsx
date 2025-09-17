import React, {JSX} from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../utils/useTheme';

const Tab = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="navbar">
        <NavLink to="/"><button>All Todo</button></NavLink>
        <NavLink to="/completed"><button>Completed</button></NavLink>
        <NavLink to="/pending"><button>Pending</button></NavLink>
        <button onClick={toggleTheme}>Toggle Theme {theme}</button>
    </nav>
  );
};

export default Tab;
