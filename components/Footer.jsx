import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer">
      <Image
        className="footer__logo"
        src="/vercel.svg"
        width={100}
        height={50}
        alt={'Footer logo'}
      />
      <p className="footer__copyright">Copyright c 2023</p>
    </footer>
  );
}

export default Footer;
