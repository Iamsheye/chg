import React from "react";

type PillProps = {
  num: number;
};

const Pill = ({ num }: PillProps) => {
  return (
    <div className="ml-1.5 inline-block rounded-lg bg-[#afb8c133] px-1.5 text-center text-xs font-medium">
      {num}
    </div>
  );
};

export default Pill;
