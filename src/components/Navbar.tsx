import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="container mx-auto max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <svg
          className="mr-3 h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>

        <button className="rounded-md bg-primaryRed px-4 py-1 text-white">
          SIGN IN
        </button>
      </div>
      <hr className="my-6  border-primaryRed" />
    </div>
  );
}

export default Navbar;
