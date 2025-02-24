import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="max-width flex-between padding-x padding-y">
        <div className="flex-center">
          <Image src="/logo.png" alt="Logo" width={110} height={150} />
        </div>
<ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="flex-center padding-x-40">
        <button className="button bg-white rounded-lg w-150 text-black">Login</button>
        <button className="button bg-black rounded-lg">Register</button>
      </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
