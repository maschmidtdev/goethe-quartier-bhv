import React from 'react';
import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useNavContext } from '../context/nav_context';

export default function Navbar() {
    const { isActive, handleClick } = useNavContext();

    return (
        <nav className={`${isActive ? 'active' : ''}`}>
            <ul>
                <li>
                    <Link to='/' onClick={handleClick}>
                        Start
                    </Link>
                </li>
                <li>
                    <Link to='/map' onClick={handleClick}>
                        Visionen
                    </Link>
                </li>
                <li>
                    <Link to='/analyse' onClick={handleClick}>
                        Analyse
                    </Link>
                </li>
                <li>
                    <Link to='/about' onClick={handleClick}>
                        Über uns
                    </Link>
                </li>
                {/* <li>
                    <Link to='/mitgestaltung' onClick={handleClick}>
                        Mitgestaltung
                    </Link>
                </li> */}
                <li>
                    <Link to='/impressum' onClick={handleClick}>
                        Impressum
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
