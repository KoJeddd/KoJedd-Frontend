import { useChats } from "@/contexts/useChats";
import NewChatButton from "../CreateChatButton";
import ChatsList from "./ChatsList";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getFriends } from "@/lib/actions/chats";

const PrivateChatsList = ({ onInitiateChat }) => {
  const { currentUserId } = useChats();
  const [friendsList, setFriendsList] = useState([]);
  const [friendSearch, setFriendSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  let friendsListFiltered = friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(friendSearch.toLowerCase()),
  );

  async function handleListFriends() {
    setIsDialogOpen((cur) => !cur);
    try {
      const friends = await getFriends(currentUserId);

      setFriendsList(friends);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger
          className="border-none outline-none"
          onClick={handleListFriends}
        >
          <NewChatButton />
        </DialogTrigger>

        <DialogContent className="border-0 bg-neutral-800 p-5 pt-12 text-white">
          <DialogHeader className="text-white">
            <DialogTitle className="mb-4 hidden text-2xl font-bold">
              New Chat (Private)
            </DialogTitle>
            <input
              onChange={(e) => setFriendSearch(e.target.value)}
              type="text"
              className="rounded-lg border border-neutral-600 bg-transparent p-2 text-white placeholder:text-neutral-500"
              placeholder="Search profile..."
            />
          </DialogHeader>
          <ul>
            {friendsListFiltered.length ? (
              friendsListFiltered.map((friend) => (
                <li key={friend.id} className="flex justify-between py-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={friend.profilePicture}
                      alt="profile picture"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <span className="text-lg font-semibold">
                        {friend.name}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onInitiateChat(friend);
                      setIsDialogOpen(false);
                    }}
                    className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-neutral-800"
                  >
                    Message
                  </button>
                </li>
              ))
            ) : (
              <p>Your search didn't match any friend</p>
            )}
          </ul>
        </DialogContent>
      </Dialog>
      <ChatsList />
    </div>
  );
};

export default PrivateChatsList;
