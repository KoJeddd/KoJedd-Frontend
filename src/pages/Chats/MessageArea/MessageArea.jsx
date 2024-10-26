import Topbar from "./Topbar";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";
import { useParams } from "react-router-dom";

const MessageArea = () => {
  const { chatId } = useParams();
  const isOpen = chatId !== undefined;

  return (
    <main
      className={`fixed inset-0 grid h-full overflow-hidden border-l border-neutral-700 bg-neutral-800 transition-all lg:relative ${isOpen ? "translate-x-0" : "translate-x-[100%] lg:translate-x-0"}`}
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Topbar />
      <span className="absolute right-[50%] top-24 translate-x-[50%] rounded-[5px] bg-neutral-500 px-2 py-1 text-sm font-bold leading-none text-gray-900">
        TODAY
      </span>
      <MessagesList />
      <MessageInput />
    </main>
  );
};

export default MessageArea;
