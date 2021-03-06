import React from "react";
import NavLink from "./NavLink";
import Icon from "../Utilities/Icon";
import CartWidget from "./CartWidget";

const DesktopNavBar = ({ categories }) => {
  return (
    <div className="w-full top-0 fixe   p-6 bg-sky-900 font-Montserrat ">
      <div className="lg:flex lg:flex-row  text-white w-4/5 m-auto ">
        <NavLink name="DigiGames" extraStyle="font-light text-2xl" directionPath="/">
          <Icon sourceImage={"/images/brand.png"} sourceHover={"/images/brand-hover.png"} size="w-10" />
        </NavLink>
        <NavLink name="Mi sesion" directionPath="/sesion" />
        <NavLink name="Mis órdenes" directionPath="/ordertrack" />
        <div className="flex flex-row ml-auto">
          <NavLink directionPath="/cart">
            <CartWidget />
          </NavLink>
          {categories.map((i) => (
            <NavLink name={i.name} directionPath={i.path} key={i.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavBar;
