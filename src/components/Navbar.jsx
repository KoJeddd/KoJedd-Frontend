import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assests/images/logo.png";
import one from "../assests/images/Avatar/01.png";
import Dropdown from "./Dropdown";
import Notifications from "./Cards/Notifications";
import NewMessages from "./Cards/NewMessages";

export const GuestNavbar = ({ searchInput, onSearchInput, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflowY = "visible";
    }

    window.addEventListener("keyup", function (e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    });

    return function () {
      window.removeEventListener("keyup", null);
    };
  }, [isMenuOpen]);
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-20 bg-[#262626] px-5 py-3 text-white">
        <div className="flex items-center justify-between">
          <Link>
            <img src={logo} alt="" />
          </Link>
          <form className="ml-auto mr-4 flex items-center" onSubmit={onSearch}>
            <div className="relative">
              <div className="inset-y-0 left-0 flex items-center pl-3 lg:absolute">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                value={searchInput}
                onChange={onSearchInput}
                type="search"
                id="default-search"
                className="border[#737373] hidden w-[350px] rounded-lg border bg-[#262626] py-2 pl-10 text-sm font-bold placeholder:text-sm  lg:block  dark:placeholder-gray-400"
                placeholder="search accounts, products or opportunities"
                required
              />
            </div>
          </form>
          <div
            className="grid cursor-pointer gap-y-1 rounded-md border border-white p-2 lg:hidden"
            onClick={() => setIsMenuOpen((cur) => !cur)}
          >
            {Array.from({ length: 3 }).map((el, index) => (
              <div
                key={index}
                style={{
                  height: "2px",
                  width: "15px",
                  backgroundColor: "#fff",
                }}
              ></div>
            ))}
          </div>
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`transition-opacity ${isMenuOpen ? "opacity-70" : "hidden opacity-0"} overlay fixed inset-0 bg-[#0f0f0f]`}
          ></div>
          <div
            className={`${isMenuOpen ? "translate-x-0" : "translate-x-[100%]"} fixed right-0 top-0 z-10 h-full bg-[#1f1f1f] p-6 transition-transform lg:static lg:translate-x-0 lg:bg-transparent lg:p-0`}
          >
            <div
              className="mb-14 cursor-pointer text-right text-xl font-bold leading-none lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              x
            </div>
            <ul className="h-full justify-between text-right text-sm font-bold lg:flex lg:h-auto lg:p-3 lg:text-left">
              <li className="mb-5 px-2 lg:mb-0">
                <Link>Explore</Link>
              </li>
              <li className="mb-5 px-2 lg:mb-0">
                <Link>Collab Opportunities</Link>
              </li>
              <li className="mb-5 px-2 lg:mb-0">
                <Link>Products and Services</Link>
              </li>
              <li className="mb-5 px-2 md:mb-0">
                <Link to={"/signin"}>
                  <button className="mx-2 rounded-md bg-none px-4 py-2 font-bold text-white">
                    Login
                  </button>
                </Link>
              </li>
              <li className="mb-5 px-2 md:mb-0">
                <Link to={"/signup"}>
                  <button className="mx-2 rounded-md bg-[#FFDF00] bg-[] px-4 py-2 font-bold text-black">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li className="mb-5 me-auto px-3 md:mb-0 md:me-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-auto md:ml-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48767 14.5623 7 13.3833 7 12C7 10.6167 7.48767 9.43733 8.463 8.462C9.43767 7.48733 10.6167 7 12 7C13.3833 7 14.5627 7.48733 15.538 8.462C16.5127 9.43733 17 10.6167 17 12C17 13.3833 16.5127 14.5623 15.538 15.537C14.5627 16.5123 13.3833 17 12 17ZM2 13C1.71667 13 1.47933 12.904 1.288 12.712C1.096 12.5207 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11H4C4.28333 11 4.521 11.0957 4.713 11.287C4.90433 11.479 5 11.7167 5 12C5 12.2833 4.90433 12.5207 4.713 12.712C4.521 12.904 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4793 12.904 19.288 12.712C19.096 12.5207 19 12.2833 19 12C19 11.7167 19.096 11.479 19.288 11.287C19.4793 11.0957 19.7167 11 20 11H22C22.2833 11 22.5207 11.0957 22.712 11.287C22.904 11.479 23 11.7167 23 12C23 12.2833 22.904 12.5207 22.712 12.712C22.5207 12.904 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4793 4.904 11.288 4.712C11.096 4.52067 11 4.28333 11 4V2C11 1.71667 11.096 1.479 11.288 1.287C11.4793 1.09567 11.7167 1 12 1C12.2833 1 12.521 1.09567 12.713 1.287C12.9043 1.479 13 1.71667 13 2V4C13 4.28333 12.9043 4.52067 12.713 4.712C12.521 4.904 12.2833 5 12 5ZM12 23C11.7167 23 11.4793 22.904 11.288 22.712C11.096 22.5207 11 22.2833 11 22V20C11 19.7167 11.096 19.4793 11.288 19.288C11.4793 19.096 11.7167 19 12 19C12.2833 19 12.521 19.096 12.713 19.288C12.9043 19.4793 13 19.7167 13 20V22C13 22.2833 12.9043 22.5207 12.713 22.712C12.521 22.904 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.279 5.58333 4.287 5.3C4.29567 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.63767 7.34567 6.363 7.337C6.08767 7.329 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9127 16.675 17.638C16.675 17.3627 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3627 16.6543 17.638 16.663C17.9127 16.671 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.721 18.4167 19.713 18.7C19.7043 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6543 6.63733 16.663 6.362C16.671 6.08733 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.279 18.7 4.287C18.9833 4.29567 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.08767 16.675 6.363 16.675C6.63767 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.346 17.3627 7.338 17.638C7.32933 17.9127 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7207 5.3 19.712C5.01667 19.704 4.775 19.6083 4.575 19.425Z"
                    fill="#A9A9A9"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="hidden items-center lg:flex">
            <button className="mx-2 rounded-md bg-none px-4 py-2 font-bold text-white">
              Login
            </button>
            <button className="mx-2 rounded-md bg-[#FFDF00] bg-[] px-4 py-2 font-bold text-black">
              Sign Up
            </button>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48767 14.5623 7 13.3833 7 12C7 10.6167 7.48767 9.43733 8.463 8.462C9.43767 7.48733 10.6167 7 12 7C13.3833 7 14.5627 7.48733 15.538 8.462C16.5127 9.43733 17 10.6167 17 12C17 13.3833 16.5127 14.5623 15.538 15.537C14.5627 16.5123 13.3833 17 12 17ZM2 13C1.71667 13 1.47933 12.904 1.288 12.712C1.096 12.5207 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11H4C4.28333 11 4.521 11.0957 4.713 11.287C4.90433 11.479 5 11.7167 5 12C5 12.2833 4.90433 12.5207 4.713 12.712C4.521 12.904 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4793 12.904 19.288 12.712C19.096 12.5207 19 12.2833 19 12C19 11.7167 19.096 11.479 19.288 11.287C19.4793 11.0957 19.7167 11 20 11H22C22.2833 11 22.5207 11.0957 22.712 11.287C22.904 11.479 23 11.7167 23 12C23 12.2833 22.904 12.5207 22.712 12.712C22.5207 12.904 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4793 4.904 11.288 4.712C11.096 4.52067 11 4.28333 11 4V2C11 1.71667 11.096 1.479 11.288 1.287C11.4793 1.09567 11.7167 1 12 1C12.2833 1 12.521 1.09567 12.713 1.287C12.9043 1.479 13 1.71667 13 2V4C13 4.28333 12.9043 4.52067 12.713 4.712C12.521 4.904 12.2833 5 12 5ZM12 23C11.7167 23 11.4793 22.904 11.288 22.712C11.096 22.5207 11 22.2833 11 22V20C11 19.7167 11.096 19.4793 11.288 19.288C11.4793 19.096 11.7167 19 12 19C12.2833 19 12.521 19.096 12.713 19.288C12.9043 19.4793 13 19.7167 13 20V22C13 22.2833 12.9043 22.5207 12.713 22.712C12.521 22.904 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.279 5.58333 4.287 5.3C4.29567 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.63767 7.34567 6.363 7.337C6.08767 7.329 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9127 16.675 17.638C16.675 17.3627 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3627 16.6543 17.638 16.663C17.9127 16.671 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.721 18.4167 19.713 18.7C19.7043 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6543 6.63733 16.663 6.362C16.671 6.08733 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.279 18.7 4.287C18.9833 4.29567 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.08767 16.675 6.363 16.675C6.63767 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.346 17.3627 7.338 17.638C7.32933 17.9127 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7207 5.3 19.712C5.01667 19.704 4.775 19.6083 4.575 19.425Z"
                fill="#A9A9A9"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export const UserNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setNotificationOpen(false);
    setMessagesOpen(false);
  };
  const notificationDropdown = () => {
    setNotificationOpen(!notificationOpen);
    setDropdownOpen(false);
    setMessagesOpen(false);
  };

  const toggleMessagesDropdown = () => {
    setMessagesOpen(!messagesOpen);
    setDropdownOpen(false);
    setNotificationOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 bg-[#262626] px-5 py-3 text-white">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[150px] md:w-full" />
          </Link>
          <form className="hidden items-center md:flex">
            {" "}
            {/* Hide search on mobile */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="border[#737373] block w-[350px] rounded-xl border bg-[#262626] py-2 pl-10 text-sm font-bold text-gray-900 placeholder:text-sm dark:placeholder-gray-400"
                placeholder="Search accounts, products or opportunities"
                required
              />
            </div>
          </form>
          <div className="flex items-center min-[1023px]:hidden">
            {/* Hamburger button for mobile */}
            <button
              className="relative mx-2 bg-none"
              onClick={toggleMessagesDropdown}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 12.825C12.0833 12.825 12.171 12.8123 12.263 12.787C12.355 12.7617 12.4423 12.7243 12.525 12.675L19.6 8.25C19.7333 8.16667 19.8333 8.06234 19.9 7.937C19.9667 7.81167 20 7.67434 20 7.525C20 7.19167 19.8583 6.94167 19.575 6.775C19.2917 6.60834 19 6.61667 18.7 6.8L12 11L5.3 6.8C5 6.61667 4.70834 6.61267 4.425 6.788C4.14167 6.96334 4 7.209 4 7.525C4 7.69167 4.03333 7.83767 4.1 7.963C4.16667 8.08834 4.26667 8.184 4.4 8.25L11.475 12.675C11.5583 12.725 11.646 12.7627 11.738 12.788C11.83 12.8133 11.9173 12.8257 12 12.825Z"
                  fill="#A9A9A9"
                />
              </svg>
              {messagesOpen && <NewMessages />}
            </button>
            <button
              className="relative mx-2 bg-none"
              onClick={notificationDropdown}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
                  fill="#A9A9A9"
                />
              </svg>
              {notificationOpen && <Notifications />}
            </button>
            <button onClick={toggleSidebar} className="focus:outline-none">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="5.4"
                  stroke="#D4D4D4"
                  stroke-width="2"
                />
                <path
                  d="M8.7998 20.8V19.2H23.1998V20.8H8.7998ZM8.7998 16.8V15.2H23.1998V16.8H8.7998ZM8.7998 12.8V11.2H23.1998V12.8H8.7998Z"
                  fill="#D4D4D4"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden justify-between text-sm font-bold min-[1023px]:flex ">
            <li className="px-2">
              <Link to="/explore">Explore</Link>
            </li>
            <li className="px-2">
              <Link to="/opportunities">Collab Opportunities</Link>
            </li>
            <li className="px-2">
              <Link to="/products-and-services">Products and Services</Link>
            </li>
          </ul>
          <div className="relative hidden items-center min-[1023px]:flex">
            <button
              className="relative mx-2 bg-none"
              onClick={toggleMessagesDropdown}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 12.825C12.0833 12.825 12.171 12.8123 12.263 12.787C12.355 12.7617 12.4423 12.7243 12.525 12.675L19.6 8.25C19.7333 8.16667 19.8333 8.06234 19.9 7.937C19.9667 7.81167 20 7.67434 20 7.525C20 7.19167 19.8583 6.94167 19.575 6.775C19.2917 6.60834 19 6.61667 18.7 6.8L12 11L5.3 6.8C5 6.61667 4.70834 6.61267 4.425 6.788C4.14167 6.96334 4 7.209 4 7.525C4 7.69167 4.03333 7.83767 4.1 7.963C4.16667 8.08834 4.26667 8.184 4.4 8.25L11.475 12.675C11.5583 12.725 11.646 12.7627 11.738 12.788C11.83 12.8133 11.9173 12.8257 12 12.825Z"
                  fill="#A9A9A9"
                />
              </svg>
              {messagesOpen && <NewMessages />}
            </button>
            <button
              className="relative mx-2 bg-none"
              onClick={notificationDropdown}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
                  fill="#A9A9A9"
                />
              </svg>
              {notificationOpen && <Notifications />}
            </button>

            <div className="relative flex items-center">
              <img
                src={one}
                alt="Profile"
                className="mx-2 w-[40px] rounded-full"
                onClick={toggleDropdown}
              />
              <span className="cursor-pointer" onClick={toggleDropdown}>
                Demitchy
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mx-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48767 14.5623 7 13.3833 7 12C7 10.6167 7.48767 9.43733 8.463 8.462C9.43767 7.48733 10.6167 7 12 7C13.3833 7 14.5627 7.48733 15.538 8.462C16.5127 9.43733 17 10.6167 17 12C17 13.3833 16.5127 14.5623 15.538 15.537C14.5627 16.5123 13.3833 17 12 17ZM2 13C1.71667 13 1.47933 12.904 1.288 12.712C1.096 12.5207 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11H4C4.28333 11 4.521 11.0957 4.713 11.287C4.90433 11.479 5 11.7167 5 12C5 12.2833 4.90433 12.5207 4.713 12.712C4.521 12.904 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4793 12.904 19.288 12.712C19.096 12.5207 19 12.2833 19 12C19 11.7167 19.096 11.479 19.288 11.287C19.4793 11.0957 19.7167 11 20 11H22C22.2833 11 22.5207 11.0957 22.712 11.287C22.904 11.479 23 11.7167 23 12C23 12.2833 22.904 12.5207 22.712 12.712C22.5207 12.904 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4793 4.904 11.288 4.712C11.096 4.52067 11 4.28333 11 4V2C11 1.71667 11.096 1.479 11.288 1.287C11.4793 1.09567 11.7167 1 12 1C12.2833 1 12.521 1.09567 12.713 1.287C12.9043 1.479 13 1.71667 13 2V4C13 4.28333 12.9043 4.52067 12.713 4.712C12.521 4.904 12.2833 5 12 5ZM12 23C11.7167 23 11.4793 22.904 11.288 22.712C11.096 22.5207 11 22.2833 11 22V20C11 19.7167 11.096 19.4793 11.288 19.288C11.4793 19.096 11.7167 19 12 19C12.2833 19 12.521 19.096 12.713 19.288C12.9043 19.4793 13 19.7167 13 20V22C13 22.2833 12.9043 22.5207 12.713 22.712C12.521 22.904 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.279 5.58333 4.287 5.3C4.29567 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.63767 7.34567 6.363 7.337C6.08767 7.329 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9127 16.675 17.638C16.675 17.3627 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3627 16.6543 17.638 16.663C17.9127 16.671 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.721 18.4167 19.713 18.7C19.7043 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6543 6.63733 16.663 6.362C16.671 6.08733 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.279 18.7 4.287C18.9833 4.29567 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.08767 16.675 6.363 16.675C6.63767 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.346 17.3627 7.338 17.638C7.32933 17.9127 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7207 5.3 19.712C5.01667 19.704 4.775 19.6083 4.575 19.425Z"
                  fill="#D4D4D4"
                />
              </svg>

              {dropdownOpen && <Dropdown />}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile and tablet */}
      <div
        className={`fixed right-0 top-0 z-40 z-[100] h-full w-72 transform bg-[#171717] p-4 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } min-w-[900px]:hidden transition-transform duration-300`}
      >
        <div className="flex justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[120px]" />
          </Link>
          <button
            onClick={toggleSidebar}
            className="right-0 mb-4 text-white focus:outline-none"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.999 21.9997C17.5219 21.9997 21.999 17.5225 21.999 11.9997C21.999 6.47685 17.5219 1.99969 11.999 1.99969C6.47617 1.99969 1.99902 6.47685 1.99902 11.9997C1.99902 17.5225 6.47617 21.9997 11.999 21.9997Z"
                fill="#7F7F7F"
              />
              <path
                d="M15 9L9 15"
                stroke="#FAFAFB"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 9L15 15"
                stroke="#FAFAFB"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul className="mt-3 flex flex-col space-y-4 text-sm text-white">
          <li>
            <Link to="/explore" onClick={toggleSidebar} className="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z"
                  fill="#D4D4D4"
                />
                <path
                  d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z"
                  fill="#D4D4D4"
                />
                <path
                  d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z"
                  fill="#D4D4D4"
                />
                <path
                  d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z"
                  fill="#D4D4D4"
                />
              </svg>
              <span className="mx-2">Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/opportunities" onClick={toggleSidebar} className="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12.015C2 6.74712 6.21 2 12.02 2C17.7 2 22 6.65699 22 11.985C22 18.1642 16.96 22 12 22C10.36 22 8.54 21.5593 7.08 20.698C6.57 20.3876 6.14 20.1572 5.59 20.3375L3.57 20.9384C3.06 21.0986 2.6 20.698 2.75 20.1572L3.42 17.9139C3.53 17.6034 3.51 17.2729 3.35 17.0125C2.49 15.4301 2 13.6975 2 12.015ZM10.7 12.015C10.7 12.7261 11.27 13.2969 11.98 13.307C12.69 13.307 13.26 12.7261 13.26 12.025C13.26 11.314 12.69 10.7431 11.98 10.7431C11.28 10.7331 10.7 11.314 10.7 12.015ZM15.31 12.025C15.31 12.7261 15.88 13.307 16.59 13.307C17.3 13.307 17.87 12.7261 17.87 12.025C17.87 11.314 17.3 10.7431 16.59 10.7431C15.88 10.7431 15.31 11.314 15.31 12.025ZM7.37 13.307C6.67 13.307 6.09 12.7261 6.09 12.025C6.09 11.314 6.66 10.7431 7.37 10.7431C8.08 10.7431 8.65 11.314 8.65 12.025C8.65 12.7261 8.08 13.2969 7.37 13.307Z"
                  fill="#A9A9A9"
                />
              </svg>
              <span className="mx-2">Collab Opportunities</span>
            </Link>
          </li>
          <li>
            <Link
              to="/products-and-services"
              onClick={toggleSidebar}
              className="flex"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12.015C2 6.74712 6.21 2 12.02 2C17.7 2 22 6.65699 22 11.985C22 18.1642 16.96 22 12 22C10.36 22 8.54 21.5593 7.08 20.698C6.57 20.3876 6.14 20.1572 5.59 20.3375L3.57 20.9384C3.06 21.0986 2.6 20.698 2.75 20.1572L3.42 17.9139C3.53 17.6034 3.51 17.2729 3.35 17.0125C2.49 15.4301 2 13.6975 2 12.015ZM10.7 12.015C10.7 12.7261 11.27 13.2969 11.98 13.307C12.69 13.307 13.26 12.7261 13.26 12.025C13.26 11.314 12.69 10.7431 11.98 10.7431C11.28 10.7331 10.7 11.314 10.7 12.015ZM15.31 12.025C15.31 12.7261 15.88 13.307 16.59 13.307C17.3 13.307 17.87 12.7261 17.87 12.025C17.87 11.314 17.3 10.7431 16.59 10.7431C15.88 10.7431 15.31 11.314 15.31 12.025ZM7.37 13.307C6.67 13.307 6.09 12.7261 6.09 12.025C6.09 11.314 6.66 10.7431 7.37 10.7431C8.08 10.7431 8.65 11.314 8.65 12.025C8.65 12.7261 8.08 13.2969 7.37 13.307Z"
                  fill="#A9A9A9"
                />
              </svg>
              <span className="mx-2">Products and Services</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/explore" onClick={toggleSidebar} className="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z"
                  fill="#D4D4D4"
                />
                <path
                  d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z"
                  fill="#D4D4D4"
                />
                <path
                  d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z"
                  fill="#D4D4D4"
                />
                <path
                  d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z"
                  fill="#D4D4D4"
                />
              </svg>
              <span className="mx-2">Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/opportunities" onClick={toggleSidebar} className="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12.015C2 6.74712 6.21 2 12.02 2C17.7 2 22 6.65699 22 11.985C22 18.1642 16.96 22 12 22C10.36 22 8.54 21.5593 7.08 20.698C6.57 20.3876 6.14 20.1572 5.59 20.3375L3.57 20.9384C3.06 21.0986 2.6 20.698 2.75 20.1572L3.42 17.9139C3.53 17.6034 3.51 17.2729 3.35 17.0125C2.49 15.4301 2 13.6975 2 12.015ZM10.7 12.015C10.7 12.7261 11.27 13.2969 11.98 13.307C12.69 13.307 13.26 12.7261 13.26 12.025C13.26 11.314 12.69 10.7431 11.98 10.7431C11.28 10.7331 10.7 11.314 10.7 12.015ZM15.31 12.025C15.31 12.7261 15.88 13.307 16.59 13.307C17.3 13.307 17.87 12.7261 17.87 12.025C17.87 11.314 17.3 10.7431 16.59 10.7431C15.88 10.7431 15.31 11.314 15.31 12.025ZM7.37 13.307C6.67 13.307 6.09 12.7261 6.09 12.025C6.09 11.314 6.66 10.7431 7.37 10.7431C8.08 10.7431 8.65 11.314 8.65 12.025C8.65 12.7261 8.08 13.2969 7.37 13.307Z"
                  fill="#A9A9A9"
                />
              </svg>
              <span className="mx-2">Collab Opportunities</span>
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} className="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48767 14.5623 7 13.3833 7 12C7 10.6167 7.48767 9.43733 8.463 8.462C9.43767 7.48733 10.6167 7 12 7C13.3833 7 14.5627 7.48733 15.538 8.462C16.5127 9.43733 17 10.6167 17 12C17 13.3833 16.5127 14.5623 15.538 15.537C14.5627 16.5123 13.3833 17 12 17ZM2 13C1.71667 13 1.47933 12.904 1.288 12.712C1.096 12.5207 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11H4C4.28333 11 4.521 11.0957 4.713 11.287C4.90433 11.479 5 11.7167 5 12C5 12.2833 4.90433 12.5207 4.713 12.712C4.521 12.904 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4793 12.904 19.288 12.712C19.096 12.5207 19 12.2833 19 12C19 11.7167 19.096 11.479 19.288 11.287C19.4793 11.0957 19.7167 11 20 11H22C22.2833 11 22.5207 11.0957 22.712 11.287C22.904 11.479 23 11.7167 23 12C23 12.2833 22.904 12.5207 22.712 12.712C22.5207 12.904 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4793 4.904 11.288 4.712C11.096 4.52067 11 4.28333 11 4V2C11 1.71667 11.096 1.479 11.288 1.287C11.4793 1.09567 11.7167 1 12 1C12.2833 1 12.521 1.09567 12.713 1.287C12.9043 1.479 13 1.71667 13 2V4C13 4.28333 12.9043 4.52067 12.713 4.712C12.521 4.904 12.2833 5 12 5ZM12 23C11.7167 23 11.4793 22.904 11.288 22.712C11.096 22.5207 11 22.2833 11 22V20C11 19.7167 11.096 19.4793 11.288 19.288C11.4793 19.096 11.7167 19 12 19C12.2833 19 12.521 19.096 12.713 19.288C12.9043 19.4793 13 19.7167 13 20V22C13 22.2833 12.9043 22.5207 12.713 22.712C12.521 22.904 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.279 5.58333 4.287 5.3C4.29567 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.63767 7.34567 6.363 7.337C6.08767 7.329 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9127 16.675 17.638C16.675 17.3627 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3627 16.6543 17.638 16.663C17.9127 16.671 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.721 18.4167 19.713 18.7C19.7043 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6543 6.63733 16.663 6.362C16.671 6.08733 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.279 18.7 4.287C18.9833 4.29567 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.08767 16.675 6.363 16.675C6.63767 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.346 17.3627 7.338 17.638C7.32933 17.9127 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7207 5.3 19.712C5.01667 19.704 4.775 19.6083 4.575 19.425Z"
                  fill="#D4D4D4"
                />
              </svg>
              <span className="mx-2">Light Mode</span>
            </Link>
          </li>
          <hr />
          {/* Make the section below be at the bottom of the side bar */}
          <div className="absolute bottom-0">
            <div
              className="relative flex items-center pt-32"
              onClick={toggleDropdown}
            >
              <img
                src={one}
                alt="Profile"
                className="w-[40px] rounded-full"
                onClick={toggleDropdown}
              />
              <span className="mx-2 cursor-pointer">Demitchy</span>

              <div className="ml-28">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.6665 6L7.99984 11.3333L13.3332 6"
                    stroke="#D4D4D4"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            {dropdownOpen && <Dropdown />}
          </div>
        </ul>
      </div>

      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};
