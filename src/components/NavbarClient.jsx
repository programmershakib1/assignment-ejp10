"use client";

import Link from "next/link";

const NavbarClient = ({ user }) => {
  return (
    <div className="flex justify-between items-center">
      <div>Blog Post</div>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        {user ? (
          <Link href="/api/auth/logout">Logout</Link>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavbarClient;