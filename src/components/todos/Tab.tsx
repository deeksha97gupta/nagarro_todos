import React, {JSX} from 'react';
import { NavLink } from 'react-router-dom';

const Tab = (): JSX.Element => {
  return (
    <nav className="navbar">
        <NavLink to="/"><button>All Todo</button></NavLink>
        <NavLink to="/completed"><button>Completed</button></NavLink>
        <NavLink to="/pending"><button>Pending</button></NavLink>
    </nav>
  );
};

export default Tab;
