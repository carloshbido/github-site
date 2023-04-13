"use client";
import { useState } from "react";

import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
        <div>Logo</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
