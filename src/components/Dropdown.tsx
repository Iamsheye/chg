import React from "react";
import { ReactComponent as Caret } from "../assets/caret.svg";

type DropdownProps = {
  name: string;
};

const Dropdown = ({ name }: DropdownProps) => {
  return (
    <div className="border-[##1b1f2426] flex w-full cursor-pointer items-center justify-between gap-0.5 rounded-md border bg-[#f6f8fa] py-1.5 px-4 text-sm font-medium">
      {name}
      <Caret className="h-4 w-4 opacity-80" />
    </div>
  );
};

export default Dropdown;
