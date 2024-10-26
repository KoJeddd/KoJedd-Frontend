import Message from "./Message";
import { useChats } from "@/contexts/useChats";

const MessagesList = () => {
  const { messages } = useChats();

  // console.log(messages);

  return (
    <div className="overflow-auto border-b-[1px] border-neutral-700 p-5">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
