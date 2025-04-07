import React, { useEffect } from 'react';
import './header.css';
import mountain1 from '../../assets/image2.png';  // If needed

function Header() {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    // Toggle the menu when the hamburger icon is clicked
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });

    // Close the menu if you click anywhere outside the nav (not just the icon)
    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileNav.classList.remove('show');
      }
    });

    // Cleanup event listeners when the component is unmounted
    return () => {
      menuToggle.removeEventListener('click', () => {});
      document.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
      <header>
        <p className="logo-title">Lorem Ipsum</p>
        <i className="ri-menu-fill" id="menu-toggle"></i>
        <nav id="mobile-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Work</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
