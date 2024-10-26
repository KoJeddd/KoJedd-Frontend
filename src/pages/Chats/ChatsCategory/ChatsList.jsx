import Chat from "./Chat";
import { useChats } from "@/contexts/useChats";

const ChatsList = () => {
  const {
    isChatsLoading,
    selectedChatsCategory,
    chats,
    chatsError: error,
  } = useChats();

  if (isChatsLoading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 overflow-auto">
      {!isChatsLoading &&
        chats.length > 0 &&
        chats.map((chat) =>
          selectedChatsCategory !== "team" ? (
            <Chat chat={chat} type="single" key={chat.id} />
          ) : (
            <Chat chat={chat} type="multi" key={chat.id} />
          ),
        )}

      {!isChatsLoading && error && <p>{error}</p>}
      {!isChatsLoading && chats.length === 0 && (
        <p className="text-center">Start a chat now!</p>
      )}
    </div>
  );
};

export default ChatsList;
