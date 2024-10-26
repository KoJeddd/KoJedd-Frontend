import React from "react";
import { Link } from "react-router-dom";
import { useChats } from "@/contexts/useChats";
import logo from "../../assests/images/de_logo.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  let { onSelectChatsCategory, selectedChatsCategory, chatsCategories } =
    useChats();

  return (
    <nav className="flex h-full flex-col items-center justify-between bg-neutral-800 px-3 py-6">
      <div className="h-11 w-11 rounded-full bg-neutral-950 p-3">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-6">
        {chatsCategories.map((el) => (
          <div
            key={el.name}
            onClick={() => onSelectChatsCategory(el.name)}
            className={`cursor-pointer rounded-lg border-2 border-transparent p-2 ${selectedChatsCategory === el.name ? " border-yellow-400 bg-neutral-950" : ""}`}
          >
            {el.icon}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
        <button>
          <svg
            width={40}
            height={40}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_9464_77285)">
              <path
                d="M25.4167 46.6673L24.75 41.334C24.3889 41.1951 24.0483 41.0284 23.7283 40.834C23.4083 40.6395 23.0961 40.4312 22.7917 40.209L17.8333 42.2923L13.25 34.3757L17.5417 31.1257C17.5139 30.9312 17.5 30.7434 17.5 30.5623V29.439C17.5 29.2579 17.5139 29.0701 17.5417 28.8757L13.25 25.6257L17.8333 17.709L22.7917 19.7923C23.0972 19.5701 23.4167 19.3618 23.75 19.1673C24.0833 18.9729 24.4167 18.8062 24.75 18.6673L25.4167 13.334H34.5833L35.25 18.6673C35.6111 18.8062 35.9517 18.9729 36.2717 19.1673C36.5917 19.3618 36.9039 19.5701 37.2083 19.7923L42.1667 17.709L46.75 25.6257L42.4583 28.8757C42.4861 29.0701 42.5 29.2579 42.5 29.439V30.5623C42.5 30.7434 42.4722 30.9312 42.4167 31.1257L46.7083 34.3757L42.125 42.2923L37.2083 40.209C36.9028 40.4312 36.5833 40.6395 36.25 40.834C35.9167 41.0284 35.5833 41.1951 35.25 41.334L34.5833 46.6673H25.4167ZM30.0833 35.834C31.6944 35.834 33.0694 35.2645 34.2083 34.1257C35.3472 32.9868 35.9167 31.6118 35.9167 30.0007C35.9167 28.3895 35.3472 27.0145 34.2083 25.8757C33.0694 24.7368 31.6944 24.1673 30.0833 24.1673C28.4444 24.1673 27.0622 24.7368 25.9367 25.8757C24.8111 27.0145 24.2489 28.3895 24.25 30.0007C24.25 31.6118 24.8122 32.9868 25.9367 34.1257C27.0611 35.2645 28.4433 35.834 30.0833 35.834Z"
                fill="#7F7F7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_9464_77285">
                <rect width={60} height={60} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
