"use client";
import React, { ReactNode } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

interface SocialIconsProps {
  icon: ReactNode;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icon }) => {
  return <div className="cursor-pointer">{icon}</div>;
};

const Navbar = () => {
  return (
    <>
      <div className="flex h-10 shadow-2xl">
        <h1 className="p-2 w-4/12 text-center welcome-left">
          Welcome to Exponential!
        </h1>
        <div className="p-2 w-5/12 flex flex-row items-center gap-8">
          <div className="flex gap-2">
            <a
              href="mailto:info@exponentialinfradesign.com"
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a
              href="mailto:info@exponentialinfradesign.com"
              className="cursor-pointer"
            >
              <h1>info@exponentialinfradesign.com</h1>
            </a>
          </div>
          <div className="flex gap-2">
            <a href="tel:+919837305499" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </a>
            <a href="tel:+919837305499" className="cursor-pointer">
              +91 9837305499
            </a>
          </div>
        </div>
        <div className="w-3/12 welcome-right flex flex-row items-center">
          <div className="m-auto gap-4 flex">
            <SocialIcons icon={<FaFacebookF />} />
            <SocialIcons icon={<FaInstagram />} />
            <SocialIcons icon={<FaTwitter />} />
            <SocialIcons icon={<FaLinkedin />} />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
