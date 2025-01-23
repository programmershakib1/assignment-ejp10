import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">Blog Post</h2>
      </div>
      <div className="flex gap-5">
        <Link
          className="border border-black py-1.5 px-4 rounded-md font-semibold"
          href="/"
        >
          Home
        </Link>
        <Link
          className="border border-black py-1.5 px-4 rounded-md font-semibold"
          href="/profile"
        >
          Profile
        </Link>
        {user ? (
          <LogoutLink>
            <h2 className="border border-black py-1.5 px-4 rounded-md font-semibold">
              Logout
            </h2>
          </LogoutLink>
        ) : (
          <LoginLink>
            <h2 className="border border-black py-1.5 px-4 rounded-md font-semibold">
              Login
            </h2>
          </LoginLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
