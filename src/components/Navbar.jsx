import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <div className="flex justify-between items-center">
      <div>Logo</div>
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

export default Navbar;
