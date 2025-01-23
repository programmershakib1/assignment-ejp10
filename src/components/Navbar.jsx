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
    <div className="mx-5 md:mx-0 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Blog Post</h2>
      </div>
      <div className="flex gap-2 md:gap-5">
        <Link
          className="border border-black py-1.5 px-2 md:px-4 rounded-md font-semibold"
          href="/"
        >
          Home
        </Link>
        <Link
          className="border border-black py-1.5 px-2 md:px-4 rounded-md font-semibold"
          href="/profile"
        >
          Profile
        </Link>
        {user ? (
          <LogoutLink>
            <h2 className="border border-black py-1.5 px-2 md:px-4 rounded-md font-semibold">
              Logout
            </h2>
          </LogoutLink>
        ) : (
          <LoginLink>
            <h2 className="border border-black py-1.5 px-2 md:px-4 rounded-md font-semibold">
              Login
            </h2>
          </LoginLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
