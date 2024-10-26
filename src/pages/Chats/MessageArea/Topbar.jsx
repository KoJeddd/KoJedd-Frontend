import React, { useEffect, useState } from "react";

import { useChats } from "@/contexts/useChats";
import { useNavigate, useParams } from "react-router-dom";
import { getCollab, getGroup, getUser } from "@/lib/actions/chats";

const Topbar = () => {
  const { chatsCategory, chatId } = useParams();
  const [recipientDetails, setRecipientDetails] = useState();
  const { currentUserId } = useChats();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let recipientId = chatId.split("__").find((id) => id !== currentUserId);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        switch (chatsCategory) {
          case "private": {
            const recipient = await getUser(recipientId);
            setRecipientDetails(recipient);
            break;
          }
          case "collab": {
            const recipient = await getCollab(chatId);
            setRecipientDetails(recipient);
            break;
          }
          case "team": {
            const recipient = await getGroup(chatId);
            setRecipientDetails(recipient);

            break;
          }
          default:
            break;
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [chatsCategory, chatId, recipientId]);

  function handleBackToChatsHome() {
    navigate("/chats");
  }
  return (
    <div className="flex justify-between border-b-[1px] border-neutral-700 p-5">
      {!isLoading ? (
        <>
          <div className="flex items-center gap-2">
            <button className="lg:hidden" onClick={handleBackToChatsHome}>
              <svg
                className="mr-3"
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 2L1.5 7L6.5 12"
                  stroke="#F8F9FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <img
              src={
                chatsCategory === "private"
                  ? recipientDetails?.profilePicture
                  : chatsCategory === "collab" || chatsCategory === "team"
                    ? recipientDetails?.profileImage
                      ? `/assests/images/Brands/${recipientDetails?.profileImage}`
                      : `/assests/images/AuthImage.png`
                    : ""
              }
              alt="profile"
              className="h-11 w-11 rounded-full border-[1px] border-yellow-500 bg-neutral-950 object-cover"
            />
            <div>
              <h3 className="text-[1.2rem] font-bold leading-none text-yellow-400">
                {recipientDetails?.name}
              </h3>
              {chatsCategory === "collab" && (
                <span className="text-sm opacity-85">
                  {recipientDetails?.brands
                    ?.map((brand) => brand.name)
                    .join(", ")}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-end gap-5">
            <button>
              <svg
                className="h-5"
                width="31"
                height="24"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.237 6.11315L23.5 5.97157V5.6729V4.15927C23.5 3.48417 23.2318 2.83673 22.7545 2.35936C22.2771 1.882 21.6296 1.61381 20.9545 1.61381H4.59091C3.91581 1.61381 3.26837 1.882 2.791 2.35936C2.31364 2.83673 2.04545 3.48417 2.04545 4.15927V5.6729V5.97157L2.30843 6.11315L12.5357 11.6195L12.7727 11.7471L13.0098 11.6195L23.237 6.11315ZM2.78245 7.55628L2.04545 7.15954V7.99654V16.432C2.04545 17.1071 2.31364 17.7545 2.791 18.2319C3.26837 18.7093 3.91581 18.9774 4.59091 18.9774H20.9545C21.6296 18.9774 22.2771 18.7093 22.7545 18.2319C23.2318 17.7545 23.5 17.1071 23.5 16.432V7.99654V7.15954L22.763 7.55628L13.0205 12.8008C12.9443 12.8418 12.8592 12.8633 12.7727 12.8633C12.6862 12.8633 12.6011 12.8418 12.525 12.8008L2.78245 7.55628ZM1 16.432V6.28245V4.15927C1 3.2069 1.37833 2.29354 2.05175 1.62011C2.72518 0.946686 3.63854 0.568359 4.59091 0.568359H20.9545C21.9069 0.568359 22.8203 0.946686 23.4937 1.62011C24.1671 2.29354 24.5455 3.2069 24.5455 4.15927V16.432C24.5455 17.3844 24.1671 18.2977 23.4937 18.9711C22.8203 19.6446 21.9069 20.0229 20.9545 20.0229H4.59091C3.63854 20.0229 2.72518 19.6446 2.05175 18.9711C1.37833 18.2977 1 17.3844 1 16.432Z"
                  fill="#7F7F7F"
                  stroke="#7F7F7F"
                />
                <ellipse
                  cx="23.6815"
                  cy="17.1151"
                  rx="6.81818"
                  ry="6.81818"
                  fill="#0F0F0F"
                />
                <circle
                  cx="23.6811"
                  cy="17.1147"
                  r="4.95455"
                  stroke="#7F7F7F"
                />
                <path
                  d="M23.1797 14.6152H24.1797V18.1152H23.1797V14.6152Z"
                  fill="#7F7F7F"
                />
                <path
                  d="M23.6797 19.6152C23.9558 19.6152 24.1797 19.3914 24.1797 19.1152C24.1797 18.8391 23.9558 18.6152 23.6797 18.6152C23.4035 18.6152 23.1797 18.8391 23.1797 19.1152C23.1797 19.3914 23.4035 19.6152 23.6797 19.6152Z"
                  fill="#7F7F7F"
                />
              </svg>
            </button>
            <button>
              <svg
                className="h-5"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6495 1.35287C15.4158 1.11786 15.0983 0.985318 14.7668 0.98438C14.4354 0.983442 14.1171 1.11419 13.882 1.34787C13.758 1.47428 13.6622 1.62551 13.6008 1.79162C12.5608 3.96162 11.4158 5.18537 9.97078 5.90787C8.34953 6.70787 6.48828 7.26412 3.48828 7.26412C3.24151 7.26528 3.00054 7.33903 2.79538 7.47617C2.59022 7.61331 2.42995 7.80779 2.33453 8.03537C2.24007 8.26386 2.21542 8.51522 2.26369 8.75772C2.31197 9.00021 2.43101 9.22297 2.60578 9.39787L6.65953 13.4516L0.988281 21.0141L8.55078 15.3429L12.6033 19.3954C12.7194 19.5124 12.858 19.6047 13.0108 19.6666C13.1633 19.7304 13.3258 19.7641 13.4883 19.7641C13.6508 19.7641 13.8133 19.7304 13.9658 19.6666C14.1944 19.5728 14.3899 19.4132 14.5275 19.2079C14.665 19.0027 14.7384 18.7612 14.7383 18.5141C14.7383 15.5141 15.2933 13.6529 16.092 12.0566C16.8133 10.6116 18.037 9.46662 20.2083 8.42662C20.3743 8.36579 20.5252 8.26986 20.6508 8.14537C20.8845 7.91029 21.0152 7.59204 21.0143 7.26058C21.0133 6.92912 20.8808 6.61161 20.6458 6.37787L15.6495 1.35287Z"
                  fill="#7F7F7F"
                />
              </svg>
            </button>
            <button>
              <svg
                className="h-5"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.7267 21.7737L18.8046 16.7378C18.192 16.1862 17.5373 15.9347 17.0091 15.9581C18.5809 14.1152 19.3783 11.7356 19.2344 9.3178C19.0905 6.90003 18.0163 4.63178 16.237 2.98835C14.4577 1.34491 12.1114 0.453842 9.68967 0.501843C7.26794 0.549845 4.95877 1.53319 3.24602 3.24584C1.53326 4.95849 0.549848 7.26752 0.501843 9.6891C0.453839 12.1107 1.34497 14.4569 2.9885 16.236C4.63204 18.0152 6.90043 19.0893 9.31835 19.2332C11.7363 19.3771 14.1161 18.5797 15.9591 17.0081C15.9341 17.5362 16.1872 18.1909 16.7388 18.8034L21.775 24.7252C22.6376 25.683 24.0454 25.7643 24.9049 24.9049C25.7643 24.0455 25.683 22.6362 24.7252 21.7752L24.7267 21.7737ZM9.87597 16.1237C8.21828 16.1237 6.62849 15.4653 5.45633 14.2932C4.28417 13.1211 3.62565 11.5314 3.62565 9.87382C3.62565 8.21624 4.28417 6.62654 5.45633 5.45446C6.62849 4.28237 8.21828 3.6239 9.87597 3.6239C11.5337 3.6239 13.1235 4.28237 14.2956 5.45446C15.4678 6.62654 16.1263 8.21624 16.1263 9.87382C16.1263 11.5314 15.4678 13.1211 14.2956 14.2932C13.1235 15.4653 11.5337 16.1237 9.87597 16.1237Z"
                  fill="#7F7F7F"
                />
              </svg>
            </button>
            <button>
              <svg
                className="h-5"
                width="6"
                height="30"
                viewBox="0 0 6 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 23.4375C1.4467 23.4375 0.1875 24.6967 0.1875 26.25C0.1875 27.8033 1.4467 29.0625 3 29.0625C4.5533 29.0625 5.8125 27.8033 5.8125 26.25C5.8125 24.6967 4.5533 23.4375 3 23.4375Z"
                  fill="#7F7F7F"
                />
                <path
                  d="M3 12.1875C1.4467 12.1875 0.1875 13.4467 0.1875 15C0.1875 16.5533 1.4467 17.8125 3 17.8125C4.5533 17.8125 5.8125 16.5533 5.8125 15C5.8125 13.4467 4.5533 12.1875 3 12.1875Z"
                  fill="#7F7F7F"
                />
                <path
                  d="M3 0.9375C1.4467 0.9375 0.1875 2.1967 0.1875 3.75C0.1875 5.3033 1.4467 6.5625 3 6.5625C4.5533 6.5625 5.8125 5.3033 5.8125 3.75C5.8125 2.1967 4.5533 0.9375 3 0.9375Z"
                  fill="#7F7F7F"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Topbar;
