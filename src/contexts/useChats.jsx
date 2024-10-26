import {
  postMessage,
  getChatMessages,
  createChat,
  getChatSummary,
  getAllUserChatsSummary,
} from "@/lib/actions/chats";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ChatsContext = createContext();
export const currentUserId = "user_002";

const ChatsProvider = ({ children }) => {
  const { chatsCategory, chatId } = useParams();
  const [selectedChatsCategory, setSelectedChatsCategory] = useState(
    chatsCategory || "collab",
  );
  const [chats, setChats] = useState([]);
  const [isChatsLoading, setIsChatsLoading] = useState(true);

  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);

  const chatsSorted = useMemo(
    () =>
      chats.sort(
        (a, b) =>
          new Date(b.lastMessage?.sentAt) - new Date(a.lastMessage?.sentAt),
      ),
    [chats],
  );

  // Initialize fetching of chats summary for current chat type
  useEffect(() => {
    async function fetchUserChats() {
      try {
        setIsChatsLoading(true);

        const chatsSummaryList = await getAllUserChatsSummary(
          selectedChatsCategory,
          currentUserId,
        );
        setChats(chatsSummaryList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsChatsLoading(false);
      }
    }

    fetchUserChats();
  }, [selectedChatsCategory]);

  // Fetch messages when chat id changes
  useEffect(() => {
    async function fetchMessages() {
      try {
        const messages = await getChatMessages(chatId);
        // console.log(messages);
        setMessages(
          messages.map((el) => {
            return {
              ...el.message,
              ...el,
            };
          }),
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchMessages();
  }, [chatId]);

  // Navigate to first chat when current user changes, or navigate to homepage if first chat DNE
  // useEffect(() => {
  //   const firstChatId = chats[0]?.id;

  //   firstChatId && navigate(`/chats/${selectedChatsCategory}/${firstChatId}`);

  //   !firstChatId && navigate("/chats");
  // }, [chats, navigate, selectedChatsCategory]);
  const chatsCategories = [
    {
      name: "collab",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_12606_66769)">
            <path
              opacity="0.993"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.43335 -0.0292969C9.74978 -0.0292969 14.0661 -0.0292969 18.3826 -0.0292969C18.3728 2.02158 18.3826 4.07236 18.4119 6.12305C18.4607 6.64061 18.7439 6.92385 19.2615 6.97266C21.3121 7.00195 23.3629 7.01174 25.4138 7.00195C25.4138 8.5449 25.4138 10.0879 25.4138 11.6309C24.4566 11.6406 23.4996 11.6309 22.5427 11.6016C21.5822 10.6018 20.5861 9.64482 19.5544 8.73047C18.7999 8.19228 17.96 7.86029 17.0349 7.73437C14.7107 7.69529 12.3865 7.69529 10.0623 7.73437C8.64915 7.9183 7.41868 8.48473 6.37085 9.43359C5.88296 9.46289 5.39468 9.47262 4.90601 9.46289C4.89624 6.47455 4.90601 3.48626 4.9353 0.498047C5.0342 0.252821 5.20022 0.0770396 5.43335 -0.0292969Z"
              fill="#7F7F7F"
            />
            <path
              opacity="0.97"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.1406 0.439453C21.7499 2.01944 23.3515 3.61124 24.9453 5.21484C23.3439 5.24414 21.7423 5.2539 20.1406 5.24414C20.1406 3.64258 20.1406 2.04101 20.1406 0.439453Z"
              fill="#7F7F7F"
            />
            <path
              opacity="0.987"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.15625 21.7676C0.15625 18.4082 0.15625 15.0488 0.15625 11.6895C0.305771 11.4717 0.501083 11.3057 0.742188 11.1914C2.83203 11.1719 4.92187 11.1523 7.01172 11.1328C7.85055 10.2152 8.88572 9.64882 10.1172 9.43361C12.4023 9.39453 14.6875 9.39453 16.9727 9.43361C17.6741 9.56955 18.2991 9.86251 18.8477 10.3125C20.1074 11.5723 21.3672 12.832 22.627 14.0918C23.111 15.0106 23.0426 15.8797 22.4219 16.6992C21.4998 17.4182 20.5623 17.4377 19.6094 16.7578C18.4643 15.5834 17.2924 14.4408 16.0938 13.3301C15.569 13.2918 15.0417 13.2723 14.5117 13.2715C13.9412 13.264 13.3748 13.2933 12.8125 13.3594C11.3062 14.651 9.78273 15.9205 8.24219 17.168C6.83113 18.5346 6.54789 20.1069 7.39258 21.8848C7.8891 22.6843 8.58244 23.2312 9.47266 23.5254C9.55229 23.922 9.6499 24.3126 9.76563 24.6973C7.56543 24.8368 5.76855 24.0653 4.375 22.3828C3.22265 22.3633 2.07031 22.3437 0.917969 22.3242C0.574772 22.2513 0.320866 22.0657 0.15625 21.7676Z"
              fill="#7F7F7F"
            />
            <path
              opacity="0.989"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.1602 13.9153C30.1602 17.2551 30.1602 20.595 30.1602 23.9348C30.029 24.2122 29.8141 24.3978 29.5156 24.4915C28.6172 24.511 27.7187 24.5305 26.8203 24.55C24.7804 26.2827 22.7296 28.0015 20.668 29.7063C20.4692 29.8012 20.2739 29.8891 20.082 29.97C19.75 29.97 19.418 29.97 19.0859 29.97C18.1374 29.6672 17.6295 29.013 17.5625 28.0071C17.602 27.6534 17.6704 27.3116 17.7676 26.9817C16.7261 27.9601 15.6714 27.9797 14.6035 27.0403C14.1897 26.5023 14.053 25.8968 14.1934 25.2239C14.2391 25.0474 14.3075 24.8814 14.3984 24.7258C14.1593 24.8346 13.9053 24.9323 13.6367 25.0188C12.4333 25.1938 11.6228 24.7153 11.2051 23.5832C11.166 23.2512 11.166 22.9192 11.2051 22.5872C11.2912 22.3191 11.3889 22.0652 11.4981 21.8254C10.2667 22.2937 9.34866 21.9422 8.74415 20.7707C8.42534 19.7575 8.68901 18.9274 9.53517 18.2805C10.8609 17.2088 12.1695 16.1151 13.4609 14.9993C14.1446 14.9602 14.8281 14.9602 15.5117 14.9993C16.5664 16.054 17.6211 17.1086 18.6758 18.1633C20.218 19.218 21.761 19.218 23.3047 18.1633C24.7741 16.7891 25.0671 15.1973 24.1836 13.3879C25.9606 13.3196 27.738 13.3098 29.5156 13.3586C29.8141 13.4523 30.029 13.6379 30.1602 13.9153Z"
              fill="#7F7F7F"
            />
          </g>
          <defs>
            <clipPath id="clip0_12606_66769">
              <rect
                width={30}
                height={30}
                fill="white"
                transform="translate(0.1875)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "team",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.26562 15C7.57812 15.0558 6.19792 15.7701 5.125 17.1429H3.03125C2.17708 17.1429 1.45833 16.9169 0.875 16.4648C0.291667 16.0128 0 15.3516 0 14.481C0 10.5413 0.645833 8.57143 1.9375 8.57143C2 8.57143 2.22656 8.68862 2.61719 8.92299C3.00781 9.15737 3.51562 9.39453 4.14062 9.63449C4.76562 9.87444 5.38542 9.99442 6 9.99442C6.69792 9.99442 7.39062 9.86607 8.07812 9.60938C8.02604 10.0223 8 10.3906 8 10.7143C8 12.2656 8.42188 13.6942 9.26562 15ZM26 25.6641C26 27.0033 25.6198 28.0608 24.8594 28.8365C24.099 29.6122 23.0885 30 21.8281 30H8.17188C6.91146 30 5.90104 29.6122 5.14062 28.8365C4.38021 28.0608 4 27.0033 4 25.6641C4 25.0725 4.01823 24.495 4.05469 23.9314C4.09115 23.3677 4.16406 22.7595 4.27344 22.1066C4.38281 21.4537 4.52083 20.8482 4.6875 20.2902C4.85417 19.7321 5.07812 19.1881 5.35938 18.6579C5.64062 18.1278 5.96354 17.6758 6.32812 17.3019C6.69271 16.928 7.13802 16.6295 7.66406 16.4062C8.1901 16.183 8.77083 16.0714 9.40625 16.0714C9.51042 16.0714 9.73438 16.1914 10.0781 16.4314C10.4219 16.6713 10.8021 16.9392 11.2188 17.2349C11.6354 17.5307 12.1927 17.7985 12.8906 18.0385C13.5885 18.2785 14.2917 18.3984 15 18.3984C15.7083 18.3984 16.4115 18.2785 17.1094 18.0385C17.8073 17.7985 18.3646 17.5307 18.7812 17.2349C19.1979 16.9392 19.5781 16.6713 19.9219 16.4314C20.2656 16.1914 20.4896 16.0714 20.5938 16.0714C21.2292 16.0714 21.8099 16.183 22.3359 16.4062C22.862 16.6295 23.3073 16.928 23.6719 17.3019C24.0365 17.6758 24.3594 18.1278 24.6406 18.6579C24.9219 19.1881 25.1458 19.7321 25.3125 20.2902C25.4792 20.8482 25.6172 21.4537 25.7266 22.1066C25.8359 22.7595 25.9089 23.3677 25.9453 23.9314C25.9818 24.495 26 25.0725 26 25.6641ZM10 4.28571C10 5.46875 9.60938 6.47879 8.82812 7.31585C8.04688 8.1529 7.10417 8.57143 6 8.57143C4.89583 8.57143 3.95312 8.1529 3.17188 7.31585C2.39062 6.47879 2 5.46875 2 4.28571C2 3.10268 2.39062 2.09263 3.17188 1.25558C3.95312 0.418527 4.89583 0 6 0C7.10417 0 8.04688 0.418527 8.82812 1.25558C9.60938 2.09263 10 3.10268 10 4.28571ZM21 10.7143C21 12.4888 20.4141 14.0039 19.2422 15.2595C18.0703 16.5151 16.6562 17.1429 15 17.1429C13.3438 17.1429 11.9297 16.5151 10.7578 15.2595C9.58594 14.0039 9 12.4888 9 10.7143C9 8.93973 9.58594 7.42466 10.7578 6.16908C11.9297 4.9135 13.3438 4.28571 15 4.28571C16.6562 4.28571 18.0703 4.9135 19.2422 6.16908C20.4141 7.42466 21 8.93973 21 10.7143ZM30 14.481C30 15.3516 29.7083 16.0128 29.125 16.4648C28.5417 16.9169 27.8229 17.1429 26.9688 17.1429H24.875C23.8021 15.7701 22.4219 15.0558 20.7344 15C21.5781 13.6942 22 12.2656 22 10.7143C22 10.3906 21.974 10.0223 21.9219 9.60938C22.6094 9.86607 23.3021 9.99442 24 9.99442C24.6146 9.99442 25.2344 9.87444 25.8594 9.63449C26.4844 9.39453 26.9922 9.15737 27.3828 8.92299C27.7734 8.68862 28 8.57143 28.0625 8.57143C29.3542 8.57143 30 10.5413 30 14.481ZM28 4.28571C28 5.46875 27.6094 6.47879 26.8281 7.31585C26.0469 8.1529 25.1042 8.57143 24 8.57143C22.8958 8.57143 21.9531 8.1529 21.1719 7.31585C20.3906 6.47879 20 5.46875 20 4.28571C20 3.10268 20.3906 2.09263 21.1719 1.25558C21.9531 0.418527 22.8958 0 24 0C25.1042 0 26.0469 0.418527 26.8281 1.25558C27.6094 2.09263 28 3.10268 28 4.28571Z"
            fill="#7F7F7F"
          />
        </svg>
      ),
    },
    {
      name: "private",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 -0.00195312C23.2845 -0.00195312 30 6.71354 30 14.998C30 23.2825 23.2845 29.998 15 29.998C12.5733 30.0012 10.1824 29.4133 8.03401 28.285L1.59901 29.9605C1.384 30.0165 1.15808 30.0154 0.943649 29.9572C0.72922 29.899 0.533723 29.7857 0.376536 29.6287C0.219349 29.4717 0.105928 29.2763 0.0475135 29.0619C-0.0109004 28.8475 -0.0122791 28.6216 0.0435142 28.4065L1.71751 21.973C0.586214 19.8223 -0.00332948 17.4281 1.41436e-05 14.998C1.41436e-05 6.71354 6.71551 -0.00195312 15 -0.00195312ZM16.878 16.498H10.125L9.97201 16.5085C9.70274 16.5456 9.45599 16.6789 9.27738 16.8837C9.09876 17.0886 9.00035 17.3512 9.00035 17.623C9.00035 17.8948 9.09876 18.1575 9.27738 18.3623C9.45599 18.5672 9.70274 18.7005 9.97201 18.7375L10.125 18.748H16.878L17.0295 18.7375C17.2988 18.7005 17.5455 18.5672 17.7241 18.3623C17.9028 18.1575 18.0012 17.8948 18.0012 17.623C18.0012 17.3512 17.9028 17.0886 17.7241 16.8837C17.5455 16.6789 17.2988 16.5456 17.0295 16.5085L16.878 16.498ZM19.875 11.248H10.125L9.97201 11.2585C9.70274 11.2956 9.45599 11.4289 9.27738 11.6337C9.09876 11.8386 9.00035 12.1012 9.00035 12.373C9.00035 12.6448 9.09876 12.9075 9.27738 13.1123C9.45599 13.3172 9.70274 13.4505 9.97201 13.4875L10.125 13.498H19.875L20.028 13.4875C20.2973 13.4505 20.544 13.3172 20.7226 13.1123C20.9013 12.9075 20.9997 12.6448 20.9997 12.373C20.9997 12.1012 20.9013 11.8386 20.7226 11.6337C20.544 11.4289 20.2973 11.2956 20.028 11.2585L19.875 11.248Z"
            fill="#7F7F7F"
          />
        </svg>
      ),
    },
  ];

  function handleSelectChatsCategory(id) {
    setSelectedChatsCategory(id);
  }
  async function handleAddChat(chatId, chatType, currentUserId) {
    try {
      const newChat = await getChatSummary(
        chatId,
        chatsCategory,
        currentUserId,
      );

      setChats((chats) => [...chats, newChat]);
      setChats((chats) =>
        chats.sort(
          (a, b) =>
            new Date(b.lastMessage?.sentAt) - new Date(a.lastMessage?.sentAt),
        ),
      );

      const recipientId = chatId.split("__")[1];
      const participants = [currentUserId, recipientId];

      await createChat(chatId, chatType, participants);
    } catch (error) {
      console.error(error);
    }
  }
  function handleUpdateLastMessage(chatId, message) {
    console.log(chatId, message);
    console.log(chats);
    setChats((chats) =>
      chats.map((chat) => {
        if (chat.id === chatId)
          return {
            ...chat,
            lastMessage: message,
          };
        else return chat;
      }),
    );
  }
  function handleAddMessage(message) {
    // Update messages locally
    setMessages((messages) => [...messages, message]);
    handleUpdateLastMessage(chatId, message);
    // Post new message to server
    handlePostMessage(message);

    // Check if chat already exists
    const existingChat = chats.find((chat) => chat.id === message.chatId);

    // Create a new chat if chat exists
    if (existingChat) return;

    // Add chat if chat doesn't exist (locally and remotely)
    handleAddChat(message.chatId, chatsCategory, currentUserId);
  }
  async function handlePostMessage(message) {
    try {
      const { isPending, ...messageObject } = message;

      await postMessage(messageObject);

      // console.log(res);

      // if (res.statusText !== "Created") return;

      setMessages((messages) =>
        messages.map((msg) => {
          if (msg.id === message.id)
            return {
              ...msg,
              message: { ...msg.message, isPending: false },
            };
          else return msg;
        }),
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ChatsContext.Provider
      value={{
        selectedChatsCategory,
        setSelectedChatsCategory,
        onSelectChatsCategory: handleSelectChatsCategory,
        chatsCategories,
        currentUserId,
        isChatsLoading,
        setIsChatsLoading,
        chats: chatsSorted,
        setChats,
        onUpdateLastMessage: handleUpdateLastMessage,
        onAddChat: handleAddChat,
        onAddMessage: handleAddMessage,
        messages,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

const useChats = () => {
  const context = useContext(ChatsContext);

  if (context === undefined)
    throw new Error("You tried to use chats context outside its provider");

  return context;
};

export { ChatsProvider, useChats };
