"use client"
import Image from 'next/image';
import Link from "next/link";


function Navbar() {
  return (
    <nav className="navbar w-full">
      <div className="max-width flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={140} height={58} className="block" />
        </div>
        <ul className="flex space-x-4 items-center font-semibold">
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
        <div className="flex space-x-4">
          <button className="button bg-white rounded-lg w-150 text-black">Login</button>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1F363D,45%,#000,55%,#1F363D)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Register</button>
        </div>
      </div>
      <div className="bg-blue-custom text-blue-custom h-2"></div>
    </nav>
  );
}

export default Navbar;
