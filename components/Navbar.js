import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <p>hmaza aslam</p>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/apppage/test">
        <a>Test</a>
      </Link>
      <a>b</a>
      <a>C</a>
    </nav>
  );
}
export default Navbar;
