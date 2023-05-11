import React from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />;

function Header() {
  return (
    <nav className="panel-bg">
      <div className="logo">
        <Link to="/">Bookstore CMS</Link>
      </div>
      <div className="links">
        <ul>
          <li className="books"><Link to="/">Books</Link></li>
          <li className="categories"><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div className="user"><i className="fa-regular fa-user" /></div>
    </nav>

  );
}

export default Header;
