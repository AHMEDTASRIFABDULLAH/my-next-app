import Link from "next/link";
import React from "react";
export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-6 bg-gray-50 p-4">
      <div className="text-xl text-blue-300">Logo</div>
      <div>
        <ul className="flex items-center gap-4">
          <Link href={`/`}>Home</Link>
          <Link href={`/About`}>About</Link>
          <li>Dashboard</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-[50px] h-[50px] rounded-full border-4 border-green-600">
        <img
          src="/pexels-holfotos-3115523.jpg"
          alt="User Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
