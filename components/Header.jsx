import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Ana Sayfa</li>
          </Link>
          <Link href="/favorites">
            <li>Favori Filmlerim</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
