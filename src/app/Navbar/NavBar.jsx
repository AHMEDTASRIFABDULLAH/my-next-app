import Link from "next/link";
import React from "react";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavBar() {
  let user = null;
  try {
    const { getUser } = getKindeServerSession();
    user = await getUser();
    console.log(user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
  return (
    <div className=" sticky top-0 flex justify-between items-center px-10 bg-gray-50 py-6 p-4">
      <div className="text-2xl text-blue-600 font-semibold">Logo</div>
      <div>
        <ul className="flex items-center gap-4">
          <Link
            className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600"
            href={`/`}
          >
            Home
          </Link>
          <Link
            className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600"
            href={`/About`}
          >
            About
          </Link>
          {user ? (
            <Link
              className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600"
              href={`/Profile`}
            >
              Profile
            </Link>
          ) : (
            <Link
              className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600"
              href={`/api/auth/login`}
            >
              Profile
            </Link>
          )}

          {user ? (
            <LogoutLink className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600">
              Logout
            </LogoutLink>
          ) : (
            <>
              <LoginLink className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600">
                Sign in
              </LoginLink>
              <RegisterLink className="px-3 py-1 bg-black text-white font-semibold rounded-md hover:bg-gray-600">
                Sign up
              </RegisterLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
