import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

export const Navbar: React.FC<Props> = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleMobileSearch = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("menu-hidden");
    }

    if (searchRef.current) {
      searchRef.current.classList.toggle("mobile-search");
    }
  };

  return (
    <nav>
      <div className="searchBar" ref={searchRef}>
        <CiSearch onClick={handleMobileSearch} />
        <input type="search" placeholder="search here..." className="" />
      </div>

      <div className="menu" ref={menuRef}>
        <a href="#">Categories</a>
        <a href="#">Website builder</a>
        <a href="#">Today deals</a>
      </div>
    </nav>
  );
};
