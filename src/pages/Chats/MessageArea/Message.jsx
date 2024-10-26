import { useChats } from "@/contexts/useChats";

const Message = ({ message }) => {
  const { currentUserId } = useChats();
  // const {
  //   message: { senderId, text, chatId, chatType },
  //   sentAt,
  // } = message;
  const { id, chatType, senderId, text, chatId, sentAt } = message;
  // console.log(message);

  const isOwnMessage = senderId === currentUserId;
  return (
    <div className={`flex py-3 ${isOwnMessage ? "justify-end" : ""}`}>
      <div
        className={`w-fit max-w-lg rounded-xl p-4 text-sm leading-[1.6] ${isOwnMessage ? "bg-yellow-500" : "bg-neutral-800"}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
