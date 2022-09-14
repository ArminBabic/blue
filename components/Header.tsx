import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";

function Header() {
  const [nav, setNav] = useState(false);

  const toggleHandler = () => setNav(!nav);

  const mobileNav = (
    <div
      className={
        nav
          ? "fixed top-0 left-0 z-[100] w-full h-screen bg-black/70 ease-in duration-500 lg:hidden"
          : ""
      }
    >
      <aside
        className={
          nav
            ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen home ease-in duration-500"
            : "fixed top-0 left-[100%]   ease-in duration-500"
        }
      >
        <div>
          <div className="flex items-center justify-around w-full pt-4">
            <Image src={logo} alt="/" />

            <div
              onClick={toggleHandler}
              className=" bg-white  border-collapse  rounded-2xl p-2 hover:scale-105 hover:bg-blue-200 cursor-pointer ease-in duration-300 shadow-md shadow-gray-500 "
            >
              <AiOutlineClose className=" text-indigo-700" />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <p className="text-white text-center  py-6 mt-8 border-b border-blue-400 w-[90%]">
            Full In-House IT Solutions £ Services Company
          </p>
        </div>

        <ul className=" flex flex-col justify-center items-center py-12">
          <Link href="/#about">
            <li
              onClick={toggleHandler}
              className="headerLink    w-full cursor-pointer hover:underline "
            >
              About Us
            </li>
          </Link>
          <Link href="/#services">
            <li
              onClick={toggleHandler}
              className="headerLink   w-full cursor-pointer hover:underline"
            >
              Services
            </li>
          </Link>
          <Link href="/#projects">
            <li
              onClick={toggleHandler}
              className="headerLink   w-full cursor-pointer hover:underline"
            >
              Projects
            </li>
          </Link>

          <Link href="/#values">
            <li
              onClick={toggleHandler}
              className="headerLink   w-full cursor-pointer hover:underline"
            >
              Values
            </li>
          </Link>

          <Link href="/#why">
            <li
              onClick={toggleHandler}
              className="headerLink   w-full cursor-pointer hover:underline"
            >
              Why BlueDuck
            </li>
          </Link>

          <Link href="/#team">
            <li
              onClick={toggleHandler}
              className="headerLink   w-full cursor-pointer hover:underline"
            >
              Team
            </li>
          </Link>
        </ul>

        <div className="flex justify-center my-12 ">
          <RiLinkedinFill className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
          <AiOutlineMail className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
          <AiOutlinePhone className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
          <BsPeople className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
        </div>
      </aside>
    </div>
  );

  return (
    <nav>
      <div className=" lg:ml-16 flex justify-between items-center pt-2  px-2  ">
        <div className="cursor-pointer object-contain pl-0">
          <Image className="pl-0 pt-2" src={logo} alt="BlueDuck-logo" />
        </div>
        <div className="flex lg:hidden">
          {!nav ? (
            <AiOutlineMenu
              onClick={toggleHandler}
              className="w-8 scale-125 text-white"
            />
          ) : null}
        </div>

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
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 z-[100] w-full h-screen bg-black/70 ease-in duration-500 lg:hidden"
            : ""
        }
      >
        <aside
          className={
            nav
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen home ease-in duration-500"
              : "fixed top-0 left-[-100%]   ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-around w-full pt-4">
              <Image src={logo} alt="/" />

              <div
                onClick={toggleHandler}
                className=" bg-white  border-collapse  rounded-2xl p-2 hover:scale-105 hover:bg-blue-200 cursor-pointer ease-in duration-300 shadow-md shadow-gray-500 "
              >
                <AiOutlineClose className=" text-indigo-700" />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <p className="text-white text-center  py-6 mt-8 border-b border-blue-400 w-[90%]">
              Full In-House IT Solutions £ Services Company
            </p>
          </div>

          <ul className=" flex flex-col justify-center items-center py-12">
            <Link href="/#about">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile    w-full cursor-pointer hover:underline "
              >
                About Us
              </li>
            </Link>
            <Link href="/#services">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile   w-full cursor-pointer hover:underline"
              >
                Services
              </li>
            </Link>
            <Link href="/#projects">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile   w-full cursor-pointer hover:underline"
              >
                Projects
              </li>
            </Link>

            <Link href="/#values">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile   w-full cursor-pointer hover:underline"
              >
                Values
              </li>
            </Link>

            <Link href="/#why">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile   w-full cursor-pointer hover:underline"
              >
                Why BlueDuck
              </li>
            </Link>

            <Link href="/#team">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile   w-full cursor-pointer hover:underline"
              >
                Team
              </li>
            </Link>
          </ul>

          <div className="flex justify-center my-12 ">
            <RiLinkedinFill className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
            <AiOutlineMail className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
            <AiOutlinePhone className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
            <BsPeople className="bg-white rounded-xl m-4 w-6 h-6 p-1 hover:scale-105 hover:bg-blue-300 cursor-pointer text-blue-700 ease-in duration-300 shadow-md shadow-gray-500" />
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Header;
