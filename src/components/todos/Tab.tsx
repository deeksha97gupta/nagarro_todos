import React from 'react';
import { NavLink } from 'react-router-dom';

const Tab = () => {
  return (
    <nav className="navbar">
        <NavLink to="/"><button>All Todo</button></NavLink>
        <NavLink to="/completed"><button>Completed</button></NavLink>
        <NavLink to="/pending"><button>Pending</button></NavLink>
    </nav>
  );
};

export default Tab;
