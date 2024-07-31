"use client"

import React from "react";
import { useRouter } from "next/navigation";


const Header = () => {
    const router = useRouter();
  const navigationMenu = ["Home", "Dashboard", "Finance", "Signin", "Society"];
  const handleClick = (item: string) => {
    console.log("handleClick", item);
    const navigationTo = item?.toLocaleLowerCase();
    router.push(`/${navigationTo}`);
  };
  return (
    <nav className="">
      <section className="">
        <header className="flex flex-row">
          <section id="logo" className="p-6">
            <span className="font-bold text-emerald-700">Society</span>
            <span className="font-bold text-emerald-900 ml-1">101</span>
          </section>
          <section id="navigation-menu" className="p-6">
            <ul className="flex flex-row">
              {navigationMenu?.map((item: string) => (
                <li key={item} className="ml-3 cursor-pointer" onClick={() => handleClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </header>
      </section>
    </nav>
  );
};

export default Header;
