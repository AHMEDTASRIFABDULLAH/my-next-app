import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function page() {
  let user = null;
  try {
    const { getUser } = getKindeServerSession();
    user = await getUser();
    console.log(user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
  console.log(user);
  return (
    <div>
      <h1 className="p-6 text-xl text-center">
        {user?.family_name} Welcome to your profile
      </h1>
    </div>
  );
}
