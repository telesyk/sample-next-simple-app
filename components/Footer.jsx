import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer">
      <Image
        className="footer__logo"
        src="/next.svg"
        width={60}
        height={13}
        alt={'Footer logo'}
      />
      <p className="footer__copyright">Copyright c 2023</p>
    </footer>
  );
}

export default Footer;
