import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
   return (
      <nav>
         <h3> Navigation </h3>
         <ul>
            <Link to="/">
               <li>Home</li>
            </Link>
            <Link to="/Author">
               <li>Author</li>
            </Link>
            <Link to="/">
               <li>Otro</li>
            </Link>
         </ul>
      </nav>
   )
}

export default Nav;
