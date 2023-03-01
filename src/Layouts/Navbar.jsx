import React, { useState } from "react";
import Logo from "../assets/logo1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Link = ({ page, selectedPage, setSelectedPage, isGetInTouch }) => {
  const lowerCasePage = page.toLowerCase();
  const href = isGetInTouch ? "#footer" : `#${lowerCasePage}`;
  return (
    <AnchorLink
      offset="120"
      className={`${selectedPage === lowerCasePage ? "text-orange-500" : ""} ${
        isGetInTouch
          ? "text-white bg-blue-100 hover:bg-orange-600"
          : "text-blue-100 hover:text-orange-500"
      }  px-3 py-2 rounded-md text-sm font-medium transition duration-500`}
      href={href}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [toggle, settoggle] = useState(false);
  const handleClick = () => {
    settoggle(!toggle);
  };
  const navbarBg = isTopOfPage ? "" : " ";
  return (
    <div
      className={`${navbarBg} fixed w-full z-40 top-0 h-[80px] flex justify-between items-center px-[30px] bg-blue-20 text-blue-100`}
    >
      {/* 👌⬇️⬇️⬇️ NAVBAR ⬇️⬇️⬇️👌 */}
      <AnchorLink href="#home">
        <div className="z-10 w-16">
          <img src={Logo} alt="logo-img" />
        </div>
      </AnchorLink>

      {/* 👌⬇️⬇️⬇️ Menu ⬇️⬇️⬇️👌 */}

      <ul className="lg4:hidden flex items-center font-semibold">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="About"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          offset={100}
        />
        <Link page="GET IN TOUCH" isGetInTouch={true} />
      </ul>

      {/* 👌⬇️⬇️⬇️  Hamburger ⬇️⬇️⬇️👌 */}
      <div
        className="cursor-pointer text-base hidden z-10 lg4:inline"
        onClick={handleClick}
      >
        {!toggle ? <FaBars /> : <FaTimes />}
      </div>
      {/* 👌⬇️⬇️⬇️ Menu ⬇️⬇️⬇️👌 */}
      <ul
        className={
          !toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-blue-20 flex flex-col justify-center place-items-center text-sm font-semibold gap-5"
        }
      >
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="About"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link page="GET IN TOUCH" isGetInTouch={true} />
      </ul>
    </div>
  );
};

export default Navbar;
