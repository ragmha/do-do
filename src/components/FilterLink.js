import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  textDecoration: 'none',
  color: 'black',
};
const FilterLink = ({ filter, children }) => (
  <NavLink exact to={filter === 'all' ? '/' : `/${filter}`} activeStyle={style}>
    {children}
  </NavLink>
);


export default FilterLink;
