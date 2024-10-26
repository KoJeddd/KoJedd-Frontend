import Chat from "./Chat";
import ChatsList from "./ChatsList";
import { useChats } from "@/contexts/useChats";

const teamChats = [
  {
    chatName: "Tech Enthusiasts",
    chatId: "team_chat_001",
    lastMessage: "Hey, are we still on for tonight’s discussion?",
    lastMessageSentAt: "2024-08-26T15:34:00Z",
    subChats: [
      {
        chatName: "AI and Machine Learning",
        chatId: "team_subchat_001_1",
        parentChatId: "team_chat_001", // Embedded parent ID
        lastMessage: "Let’s finalize the agenda.",
        lastMessageSentAt: "2024-08-26T16:00:00Z",
        subChats: [], // Further nesting if needed
      },
      {
        chatName: "Web Development",
        chatId: "team_subchat_001_2",
        parentChatId: "team_chat_001", // Embedded parent ID
        lastMessage: "We should focus on frontend frameworks next!",
        lastMessageSentAt: "2024-08-25T18:45:00Z",
        subChats: [], // Further nesting if needed
      },
    ],
  },
  {
    chatName: "Book Club",
    chatId: "team_chat_002",
    lastMessage: "Got the reading list for next month!",
    lastMessageSentAt: "2024-08-26T14:20:30Z",
    subChats: [
      {
        chatName: "Science Fiction",
        chatId: "team_subchat_002_1",
        parentChatId: "team_chat_002", // Embedded parent ID
        lastMessage: "I’ve added my thoughts on the first chapter.",
        lastMessageSentAt: "2024-08-26T15:10:00Z",
        subChats: [], // Further nesting if needed
      },
    ],
  },
  // {
  //   chatName: "Fitness Community",
  //   chatId: "team_chat_003",
  //   lastMessage: "Let’s catch up for the weekend workout.",
  //   lastMessageSentAt: "2024-08-25T19:05:10Z",
  //   subChats: [], // No subchats here
  // },
];

const TeamChatsList = () => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <ChatsList />
    </div>
  );
};

export default TeamChatsList;
