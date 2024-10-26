import { useChats } from "@/contexts/useChats";

function ChatsSelectTopbar() {
  const { selectedChatsCategory } = useChats();

  return (
    <div className="lg:p-5">
      <h3 className="text-xl font-semibold hidden lg:block">
        {selectedChatsCategory[0].toUpperCase() +
          selectedChatsCategory.slice(1)}{" "}
        chat
      </h3>
    </div>
  );
}

export default ChatsSelectTopbar;
