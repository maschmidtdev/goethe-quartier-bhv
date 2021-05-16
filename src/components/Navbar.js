import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Navbar() {
  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Über uns</Link>
        </li>
        <li>
          <Link to='/analyse'>Analyse</Link>
        </li>
        <li>
          <Link to='/eindruecke'>Eindrücke</Link>
        </li>
        <li>
          <Link to='/mitgestaltung'>Mitgestaltung</Link>
        </li>
        <li>
          <Link to='/akteure'>Akteure</Link>
        </li>
        <li>
          <Link to='/visionen'>Visionen</Link>
        </li>
      </ul>
    </div>
  );
}
