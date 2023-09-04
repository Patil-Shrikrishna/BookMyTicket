import React from "react";

const BtnPrimary = ({ name }) => {
  return (
    <button className="px-4 py-1 btn rounded-md bg-[#F84464] border-transparent text-sm text-white">
      {name}
    </button>
  );
};
export default BtnPrimary;
