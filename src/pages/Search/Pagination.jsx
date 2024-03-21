import { useState } from "react";

function Pagination() {
  const [selectedPage, setSelectedPage] = useState(1);

  //   function handleSelectPage(id) {
  //     setSelectedPage(id);
  //   }
  return (
    <ul className="my-16 flex items-center justify-center gap-4 font-bold text-black">
      <li
        onClick={() => setSelectedPage(1)}
        className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-lg ${selectedPage === 1 ? "bg-yellow-500" : "bg-white"} text-xl`}
      >
        1
      </li>
      <li
        onClick={() => setSelectedPage(2)}
        className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-lg ${selectedPage === 2 ? "bg-yellow-500" : "bg-white"} text-xl`}
      >
        2
      </li>
      <li
        onClick={() => setSelectedPage(3)}
        className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-lg ${selectedPage === 3 ? "bg-yellow-500" : "bg-white"} text-xl`}
      >
        3
      </li>
      <li
        onClick={() => setSelectedPage(4)}
        className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-lg ${selectedPage === 4 ? "bg-yellow-500" : "bg-white"} text-xl`}
      >
        4
      </li>
      <li className="grid aspect-square h-10 cursor-default place-items-center rounded-lg bg-white text-xl">
        ...
      </li>
      <li
        onClick={() => setSelectedPage(30)}
        className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-lg ${selectedPage === 30 ? "bg-yellow-500" : "bg-white"} text-xl`}
      >
        30
      </li>
    </ul>
  );
}

export default Pagination;
