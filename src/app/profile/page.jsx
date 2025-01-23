import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="mx-5 md:mx-0 my-10">
      <h2 className="text-center text-xl font-bold">
        Welcome to your profile!
      </h2>
    </div>
  );
};

export default Profile;
