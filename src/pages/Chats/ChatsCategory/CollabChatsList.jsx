import InitiateCollabButton from "../CreateChatButton";
import ChatsList from "./ChatsList";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import { currentUserId, useChats } from "@/contexts/useChats";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { getBrands, getUser } from "@/lib/actions/chats";
// import { getChats } from "@/lib/actions/chats";

// const collabChats = [
//   {
//     chatName: "Project Team",
//     chatId: "collab_chat_001",
//     lastMessage: "Don't forget the meeting tomorrow at 10 AM.",
//     lastMessageSentAt: "2024-08-26T15:34:00Z",
//   },
//   {
//     chatName: "Family Group",
//     chatId: "collab_chat_002",
//     lastMessage: "Dinner at grandma's place this weekend?",
//     lastMessageSentAt: "2024-08-26T14:20:30Z",
//   },
//   {
//     chatName: "Best Friends",
//     chatId: "collab_chat_003",
//     lastMessage: "Check out this new song!",
//     lastMessageSentAt: "2024-08-25T19:05:10Z",
//   },
//   {
//     chatName: "Work Updates",
//     chatId: "collab_chat_004",
//     lastMessage: "The latest report has been uploaded.",
//     lastMessageSentAt: "2024-08-26T08:15:45Z",
//   },
//   {
//     chatName: "Sports Club",
//     chatId: "collab_chat_005",
//     lastMessage: "Practice session rescheduled to 6 PM.",
//     lastMessageSentAt: "2024-08-26T12:50:00Z",
//   },
// ];

const CollabChatsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedChatsCategory, chatsCategories } = useChats();
  const [brands, setBrands] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  console.log(brands)
  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser(currentUserId);
        setCurrentUser(user);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const brands = await getBrands();

        setBrands(
          brands.map((brand) => {
            return { ...brand, isSelected: false };
          }),
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchBrands();
  }, []);

  function handleListCollaborators() {
    setIsDialogOpen(true);
  }
  function handleSelectCollaborator(brand) {
    setBrands(
      brands.map((br) =>
        brand.id === br.id ? { ...brand, isSelected: !br.isSelected } : br,
      ),
    );
    navigate(`/chats/collab/${brand.id}/collab-proposal`);
    setIsDialogOpen(false);
  }

  useEffect(() => {
    async function fetchChats() {
      try {
        setIsLoading(true);
        // const chats = await getChats(selectedChatsCategory);

        // setChats(chats);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchChats();
  }, [selectedChatsCategory]);

  function initiateCollab() {
    // navigate(`/chats/${chatsCategory}/${chatId}/collab-proposal`);
    setIsDialogOpen(true);
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex h-full flex-col gap-6 overflow-hidden p-5">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border-0 bg-neutral-800 p-5 pt-12 text-white">
          <div className="text-center">
            <DialogTitle className="mb-5 text-xl">Select Brand</DialogTitle>
            <DialogDescription>
              Select the only entity responsible for processing your proposal
            </DialogDescription>
          </div>
          <li className="mt-4 flex cursor-pointer items-center justify-between rounded-lg border-2 border-neutral-600 p-3">
            <div className="flex items-center gap-2">
              <img
                src={`/assests/images/Brands/Okay Bears.png`}
                className="h-8 w-8 rounded-full border border-yellow-500"
                alt="brand logo"
              />
              <span>Collab team</span>
            </div>
            <span className="text-2xl font-semibold">{">"}</span>
          </li>
          <span className="text-sm font-semibold">Choose one</span>
          <ul className="space-y-4">
            {brands?.map((brand) => (
              <li
                key={brand.id}
                className=""
                onClick={() => handleSelectCollaborator(brand)}
              >
                <button
                  className={`flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-neutral-600 p-3 ${brand.isSelected ? "opacity-30" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`/assests/images/Brands/${brand.profileImage}`}
                      className="h-8 w-8 rounded-full border border-yellow-500"
                      alt="brand logo"
                    />
                    <span>{brand.name}</span>
                  </div>
                  <span className="text-2xl font-semibold">{">"}</span>
                </button>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
      <InitiateCollabButton onClick={initiateCollab} />
      <ChatsList />
    </div>
  );
};

export default CollabChatsList;
