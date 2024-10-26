import { useChats } from "@/contexts/useChats";
import { FaPlus } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";
import { Link } from "react-router-dom";

const CreateChatButton = ({ onClick }) => {
  const { selectedChatsCategory, chatsCategories } = useChats();
  let icon, text, path;

  switch (selectedChatsCategory) {
    case chatsCategories[0].name:
      text = "Initiate collab";
      icon = chatsCategories[0].icon;
      path = "/collab";
      break;
    case chatsCategories[2].name:
      text = "New chat";
      icon = chatsCategories[2].icon;
      break;
    default:
      break;
  }

  return (
    <div
      onClick={onClick}
      className="relative mx-auto flex w-fit cursor-pointer items-center justify-center gap-4 rounded-xl bg-neutral-700 p-3 lg:mx-0 lg:w-full lg:gap-0 lg:p-5"
    >
      <div className="relative rounded-lg border-2 border-yellow-500 bg-neutral-800 p-2 lg:absolute lg:left-3">
        <span>{icon}</span>
        <span className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] rounded-full border-2 border-yellow-500 bg-neutral-800 p-[3px]">
          <FaPlus className="h-2 w-2" />
        </span>
      </div>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};

export default CreateChatButton;
