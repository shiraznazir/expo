"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="py-4 flex flex-row justify-around shadow-2xl">
      <div className="flex gap-2">
        <Image src={logo} width={50} height={50} alt="logo" />
        <div className="leading-6">
          <h1 className="font-bold text-2xl italic text-[#906E50] font-sans">
            Exponential
          </h1>
          <h1 className="font-sm">InfraDesign Pvt. Ltd.</h1>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Link href={"/"} className="text-[#906E50] font-bold">
          Home
        </Link>
        <Link href={"/"} className="text-[#906E50] font-bold">
          About Us
        </Link>
        <Link href={"/"} className="text-[#906E50] font-bold">
          Services
        </Link>
        <Link href={"/"} className="text-[#906E50] font-bold">
          Products
        </Link>
        <Link href={"/"} className="text-[#906E50] font-bold">
          Careers
        </Link>
        <Link href={"/"} className="text-[#906E50] font-bold">
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Header;
