const initialChats = [
  {
    chatId: "user_001__user_004",
    receiverUserData: {
      id: "user_004",
      name: "Diana",
      friends: ["user_001", "user_002", "user_003", "user_005"],
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    chatType: "private",
    lastMessage: {
      id: "0432",
      message: {
        senderId: "user_001",
        chatId: "user_001__user_004",
        chatType: "private",
        text: "I'm giving you this role because I know you can handle it. Don't disappoint me",
        isPending: true,
      },
      sentAt: "2024-08-29T19:18:16.037Z",
    },
  },
  {
    chatId: "user_001__user_002",
    receiverUserData: {
      id: "user_002",
      name: "Bob",
      friends: ["user_001", "user_003", "user_004", "user_005"],
      profilePicture:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    chatType: "private",
    lastMessage: {
      id: "0a4a",
      message: {
        senderId: "user_001",
        chatId: "user_001__user_002",
        chatType: "private",
        text: "do me this solid",
        isPending: true,
      },
      sentAt: "2024-08-29T19:17:17.787Z",
    },
  },
  {
    chatId: "user_001__user_003",
    receiverUserData: {
      id: "user_003",
      name: "Charlie",
      friends: ["user_001", "user_002", "user_004", "user_005"],
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
    chatType: "private",
    lastMessage: {
      id: "9312",
      message: {
        senderId: "user_001",
        chatId: "user_001__user_003",
        chatType: "private",
        text: "holla",
        isPending: true,
      },
      sentAt: "2024-08-29T18:44:27.406Z",
    },
  },
];

const initialState = {
  chats: [],
  messages: [],
  friends: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "chats/getSummary":
      return { ...state, chats: action.payload };
    case "chats/add":
      return { ...state, chats: [...state.chats, action.payload] };
    case "chats/remove":
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload),
      };
    case "messages/getAll":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}
