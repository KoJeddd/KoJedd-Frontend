import React from "react";
import { useParams } from "react-router-dom";
import Chats from "./ChatsCategory/Chats";
import { ChatsProvider } from "@/contexts/useChats";
import MessageArea from "./MessageArea/MessageArea";

const WrappedProvider = () => {
  const { chatsCategory } = useParams();
  return (
    <ChatsProvider chatsCategory={chatsCategory}>
      <Chats />
    </ChatsProvider>
  );
};

export default WrappedProvider;
