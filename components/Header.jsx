import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Image
          className="header__logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={60}
          height={13}
          priority
        />
        <div className="header__menu" role="menubar">
          <Link href="/" role="menuitem" className="header__menu-link">
            Home
          </Link>
          <Link href="/events" role="menuitem" className="header__menu-link">
            Events
          </Link>
          <Link href="/about" role="menuitem" className="header__menu-link">
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
