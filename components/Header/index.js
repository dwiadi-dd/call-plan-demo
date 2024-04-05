import React from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <div className="flex items-center mt-10 w-full justify-between md:justify-around ">
      <div className="flex gap-4 md:gap-20 w-6/12 ">
        <div className="flex gap-6 ">
          <label className="capitalize font-light text-sm md:text-xl">
            year
          </label>
          <select className="border border-slate-300 rounded-md px-2">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
        <div className="flex gap-6 ">
          <label className="capitalize font-light text-sm md:text-xl">
            Week
          </label>
          <select className="border border-slate-300 rounded-md px-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <Button>Generate</Button>
    </div>
  );
};

export default Header;
