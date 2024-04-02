import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link
          href={"/"}
          className=" rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-2xl md:text-4xl text-black font-semibold"
        >
          H
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;