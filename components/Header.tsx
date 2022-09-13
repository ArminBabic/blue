import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);

  const toggleHandler = () => setNav(!nav);

  const mobileNav = (
    <div className="fixed h-screen">
      <div className="flex lg:hidden">
        {
          <AiOutlineClose
            onClick={toggleHandler}
            className="w-8 scale-125 text-white   border rounded-2xl"
          />
        }
      </div>

      <ul
        className={
          !nav
            ? "hidden "
            : "lg:hidden fixed top-20 z-10 right-50 left-0  home max-h-[1500px] min-w-[1200px]  "
        }
      >
        <Link href="/#about">
          <li
            onClick={toggleHandler}
            className="headerLink border-b-2 border-zinc-300 w-full cursor-pointer hover:underline"
          >
            About Us
          </li>
        </Link>
        <Link href="/#services">
          <li
            onClick={toggleHandler}
            className="headerLink border-b-2 border-zinc-300 w-full cursor-pointer hover:underline"
          >
            Services
          </li>
        </Link>
        <Link href="/#projects">
          <li
            onClick={toggleHandler}
            className="headerLink border-b-2 border-zinc-300 w-full cursor-pointer hover:underline"
          >
            Projects
          </li>
        </Link>

        <Link href="/#values">
          <li
            onClick={toggleHandler}
            className="headerLink border-b-2 border-zinc-300 w-full cursor-pointer hover:underline"
          >
            Values
          </li>
        </Link>

        <Link href="/#why">
          <li
            onClick={toggleHandler}
            className="headerLink border-b-2 border-zinc-300 w-full cursor-pointer hover:underline"
          >
            Why BlueDuck
          </li>
        </Link>

        <Link href="/#team">
          <li
            onClick={toggleHandler}
            className="headerLink border-b-2 border-zinc-300 w-full cursor-pointer hover:underline"
          >
            Team
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className=" lg:ml-24 flex justify-between items-center    ">
      <div className="cursor-pointer object-contain pl-0">
        <Image
          className="pl-0"
          src={logo}
          width={100}
          height={46}
          alt="BlueDuck-logo"
        />
      </div>
      <div className="flex lg:hidden">
        {!nav ? (
          <AiOutlineMenu
            onClick={toggleHandler}
            className="w-8 scale-125 text-white"
          />
        ) : (
          <AiOutlineClose
            onClick={toggleHandler}
            className="w-8 scale-125 text-white   border rounded-2xl"
          />
        )}
      </div>

      {nav && mobileNav}

      <div className="hidden space-x-4 lg:flex px-5">
        <ul className="hidden space-x-4 lg:flex px-5">
          <Link href="/#about">
            <li className="headerLink">About Us</li>
          </Link>
          <Link href="/#services">
            <li className="headerLink">Services</li>
          </Link>
          <Link href="/#projects">
            <li className="headerLink">Projects</li>
          </Link>

          <Link href="/#values">
            <li className="headerLink">Values</li>
          </Link>

          <Link href="/#why">
            <li className="headerLink">Why BlueDuck</li>
          </Link>

          <Link href="/#team">
            <li className="headerLink">Team</li>
          </Link>

          <button className=" headerLink text-white px-8 py-2 bg-[#5889f1] rounded-3xl hover:scale-105 transition duration-[.4s] mt-2">
            Contact Us
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
