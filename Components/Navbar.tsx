// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { NAV_LINKS } from "@/constants";
// import Button from "./Button";

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => {
//           return (
//             <Link
//               href={link.href}
//               key={link.key}
//               className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
//             >
//               {link.label}
//             </Link>
//           );
//         })}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button
//         type="button"
//         title="Login"
//         icon="user.svg"
//         variant="btn_dark_green"
//         />
//       </div>
//       <Image src="menu.svg"
//       onClick={}
//       alt="menu"
//       width={32}
//       height={32}
//       className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   );
// };

// export default Navbar;

// Above is original but this one is modified
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={toggleMobileNav}
        className="inline-block cursor-pointer lg:hidden"
      />

      {isMobileNavVisible && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center lg:hidden">
          <button
            onClick={toggleMobileNav}
            className="absolute top-4 right-4 text-white"
          >
            <Image src="/close.svg" alt="close" width={32} height={32} />
          </button>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Button
            type="button"
            title="Login"
            icon="user.svg"
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
