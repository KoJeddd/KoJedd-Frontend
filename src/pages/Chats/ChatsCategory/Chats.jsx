import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import ChatsSelect from "./ChatsSelect";
import CollabChatsList from "./CollabChatsList";
import TeamChatsList from "./TeamChatsList";
import PrivateChatsList from "./PrivateChatsList";
import { Outlet, useNavigate } from "react-router-dom";
import { useChats } from "@/contexts/useChats";
import Tabs from "@/components/Tabs/Tabs";
import MessageArea from "../MessageArea/MessageArea";

const Chats = () => {
  const {
    onSelectChatsCategory,
    selectedChatsCategory,
    chatsCategories,
    currentUserId,
  } = useChats();

  const navigate = useNavigate();

  function handleInitiateChat(recipient) {
    if (
      selectedChatsCategory === "collab" ||
      selectedChatsCategory === "private"
    )
      navigate(
        `/chats/${selectedChatsCategory}/${currentUserId}__${recipient.id}`,
      );
  }

  return (
    <div className="flex h-screen flex-col bg-neutral-900 text-white lg:flex-row">
      {/* Desktop nav */}
      <div className="hidden lg:block">
        <NavBar />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        {/* Mobile nav */}
        <div className="flex items-center justify-between bg-neutral-800 p-4">
          <div className="flex items-center gap-3">
            <img
              src="/assests/images/Brands/DeMitchy.png"
              alt="de logo"
              className="w-10 rounded-full"
            />
            <h1 className="text-xl font-bold">Chat</h1>
          </div>
          <div className="flex items-center gap-5">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_15860_66182)">
                <path
                  d="M17.5013 17.5L13.763 13.755M15.8346 8.75002C15.8346 10.6286 15.0884 12.4303 13.76 13.7587C12.4316 15.0871 10.6299 15.8334 8.7513 15.8334C6.87269 15.8334 5.07101 15.0871 3.74263 13.7587C2.41425 12.4303 1.66797 10.6286 1.66797 8.75002C1.66797 6.8714 2.41425 5.06973 3.74263 3.74135C5.07101 2.41296 6.87269 1.66669 8.7513 1.66669C10.6299 1.66669 12.4316 2.41296 13.76 3.74135C15.0884 5.06973 15.8346 6.8714 15.8346 8.75002V8.75002Z"
                  stroke="#FEFEFE"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_15860_66182">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.26368 20L6.86567 16.8C6.65008 16.7167 6.44677 16.6167 6.25572 16.5C6.06468 16.3833 5.87828 16.2583 5.69652 16.125L2.73632 17.375L0 12.625L2.56219 10.675C2.54561 10.5583 2.53731 10.4457 2.53731 10.337V9.663C2.53731 9.55433 2.54561 9.44167 2.56219 9.325L0 7.375L2.73632 2.625L5.69652 3.875C5.87894 3.74167 6.06965 3.61667 6.26866 3.5C6.46766 3.38333 6.66667 3.28333 6.86567 3.2L7.26368 0H12.7363L13.1343 3.2C13.3499 3.28333 13.5532 3.38333 13.7443 3.5C13.9353 3.61667 14.1217 3.74167 14.3035 3.875L17.2637 2.625L20 7.375L17.4378 9.325C17.4544 9.44167 17.4627 9.55433 17.4627 9.663V10.337C17.4627 10.4457 17.4461 10.5583 17.4129 10.675L19.9751 12.625L17.2388 17.375L14.3035 16.125C14.1211 16.2583 13.9304 16.3833 13.7313 16.5C13.5323 16.6167 13.3333 16.7167 13.1343 16.8L12.7363 20H7.26368ZM10.0498 13.5C11.0116 13.5 11.8325 13.1583 12.5124 12.475C13.1924 11.7917 13.5323 10.9667 13.5323 10C13.5323 9.03333 13.1924 8.20833 12.5124 7.525C11.8325 6.84167 11.0116 6.5 10.0498 6.5C9.07131 6.5 8.2461 6.84167 7.57413 7.525C6.90216 8.20833 6.5665 9.03333 6.56717 10C6.56717 10.9667 6.90282 11.7917 7.57413 12.475C8.24544 13.1583 9.07065 13.5 10.0498 13.5Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
        </div>
        {/* Mobile chats category tabs */}
        <div className="mt-8">
          <Tabs
            tabItemsText={["Collab", "Team", "Private"]}
            selectedTab={selectedChatsCategory}
            onSelectTab={onSelectChatsCategory}
          />
        </div>
      </div>
      <ChatsSelect>
        {selectedChatsCategory === chatsCategories[0].name && (
          <CollabChatsList onInitiateChat={handleInitiateChat} />
        )}
        {selectedChatsCategory === chatsCategories[1].name && (
          <TeamChatsList onInitiateChat={handleInitiateChat} />
        )}
        {selectedChatsCategory === chatsCategories[2].name && (
          <PrivateChatsList onInitiateChat={handleInitiateChat} />
        )}
      </ChatsSelect>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Chats;
