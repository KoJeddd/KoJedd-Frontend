import { useChats } from "@/contexts/useChats";
import { getGroups, getUsers } from "@/lib/actions/chats";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Chat = ({ chat, type = "" }) => {
  const navigate = useNavigate();
  let { chatId: chatIdParam, communityId } = useParams();
  const { id } = chat;
  const { selectedChatsCategory } = useChats();

  let isSelected = chatIdParam === id;

  function handleToggleSelectChat(chatId) {
    if (type === "single")
      isSelected
        ? navigate(`/chats`)
        : navigate(`/chats/${selectedChatsCategory}/${chatId}`);
    if (type === "multi")
      isSelected
        ? navigate(`/chats`)
        : navigate(`/chats/${selectedChatsCategory}/${id}/${chatId}`);
  }

  if (type === "single")
    return (
      <SingleChat
        onToggleSelectChat={handleToggleSelectChat}
        isSelected={isSelected}
        chat={chat}
      />
    );
  if (type === "multi") return <MultiChat chat={chat} />;
};

function MultiChat({ chat }) {
  const navigate = useNavigate();
  const [chatData, setChatData] = useState({});

  let { chatId: chatIdParam, teamId } = useParams();

  let isSelected = teamId === chat.id;

  useEffect(() => {
    async function fetchGroups() {
      try {
        const groups = await getGroups(chat.groupIds);
        const groupsFullData = await Promise.all(
          groups.map(async (group) => {
            const usersData = await getUsers(group.participants);
            return { ...group, participants: usersData };
          }),
        );
        setChatData({ ...chat, groups: groupsFullData });
      } catch (error) {
        console.error(error);
      }
    }
    fetchGroups();
  }, [chat]);

  const { selectedChatsCategory } = useChats();

  function handleToggleSelectChat(childChatId) {
    console.log(childChatId);
    chatIdParam === childChatId
      ? navigate(`/chats`)
      : navigate(`/chats/${selectedChatsCategory}/${chat.id}/${childChatId}`);
  }

  return (
    <div
      className={`${isSelected ? "border border-yellow-500 bg-neutral-600" : "bg-neutral-800"} rounded-lg`}
    >
      <div className="flex items-center gap-2 p-3">
        <div
          className={`h-8 w-8 rounded-full ${isSelected ? "bg-neutral-400" : "bg-neutral-600"}`}
        ></div>
        <h4 className="text-xl font-bold leading-5 text-yellow-500">
          {chatData.teamName}
        </h4>
      </div>
      <div className="h-[1px] bg-neutral-400"></div>
      <div className="px-5 py-2">
        {chatData.groups?.map((group) => (
          <SingleChat
            key={group.id}
            onToggleSelectChat={() => handleToggleSelectChat(group.id)}
            chat={group}
            selectedChildChat={chatIdParam}
            isSelected={group.id === chatIdParam}
          />
        ))}
      </div>
    </div>
  );
}

function SingleChat({
  onToggleSelectChat,
  isSelected,
  chat,
  selectedChildChat = "",
}) {
  const { selectedChatsCategory, chatsCategories } = useChats();
  let isTeam = selectedChatsCategory === chatsCategories[1].name;

  return (
    <div
      onClick={() => onToggleSelectChat(chat.id)}
      className={
        isTeam
          ? isSelected
            ? `cursor-pointer py-2`
            : "cursor-pointer py-2"
          : `cursor-pointer rounded-xl ${isSelected ? "bg-neutral-600" : "bg-neutral-800"} p-2`
      }
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: ".7rem",
        }}
      >
        <div>
          {isTeam && isSelected && (
            <div className="absolute -left-3 top-[50%] h-2 w-2 translate-y-[-50%] rounded-full bg-yellow-500"></div>
          )}
          <img
            src={
              chat.chatType === "private"
                ? chat.profilePicture
                : `/assests/images/Brands/${chat.profileImage || "DeMitchy.png"}`
            }
            alt="profile picture"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className=" mr-auto font-bold text-yellow-400">
              {chat.name}
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <span className="text-sm">
              {new Date(
                chat.lastMessage?.sentAt || new Date().toISOString(),
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          {!isTeam && (
            <div className="py-2">
              <div
                style={{
                  height: ".2px ",
                  backgroundColor: "rgba(255 255 255 /.2)",
                }}
              ></div>
            </div>
          )}
          <p className="text-sm">
            {chat.lastMessage?.text.slice(0, 30) || "Last message..."}
            {chat.lastMessage?.text.length >= 30 && "..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
