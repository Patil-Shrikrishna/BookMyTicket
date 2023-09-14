import { useState } from "react";

const SeatComponent = ({ row, number, onClick }) => {
  const [selected, isSelected] = useState(false);
  return (
    <div
      onClick={() => {
        isSelected(!selected), onClick(number, row);
      }}
      className={`${
        selected ? "bg-green-400 text-white" : "bg-white text-green-400"
      } btn-square flex border-2 border-green-400 text-lg font-semibold items-center justify-center rounded-sm select-none`}
    >
      {number}
    </div>
  );
};
export default SeatComponent;
