import {
  chats,
  messages,
  groups,
  teams,
} from "../../src/data/dummyData/chats.json";

const userId = "user_001"; // The user you're querying data for

// Step 1: Get user's private, collab, and team chats
const userPrivateChats = chats.filter(
  (chat) => chat.chatType === "private" && chat.participants.includes(userId),
);
const userCollabChats = chats.filter(
  (chat) => chat.chatType === "collab" && chat.participants.includes(userId),
);
// Step 2: Get groups and teams the user is involved with
const userGroups = groups.filter((group) => group.members.includes(userId));
const userTeams = teams.filter((team) =>
  team.groups.some((groupId) =>
    userGroups.some((group) => group.groupId === groupId),
  ),
);

const userTeamChats = chats.filter(
  (chat) =>
    chat.chatType === "team" &&
    chat.groups.some((groupId) =>
      userGroups.some((group) => group.groupId === groupId),
    ),
);

// Step 3: Get messages related to these chats
const userPrivateChatIds = userPrivateChats.map((chat) => chat.chatId);
const userCollabChatIds = userCollabChats.map((chat) => chat.chatId);
const userTeamChatIds = userTeamChats.map((chat) => chat.chatId);

const userPrivateMessages = messages.filter((message) =>
  userPrivateChatIds.includes(message.chatId),
);
const userCollabMessages = messages.filter((message) =>
  userCollabChatIds.includes(message.chatId),
);
const userTeamMessages = messages.filter((message) =>
  userTeamChatIds.includes(message.chatId),
);

// Combine results into a single data structure
export const userData = {
  user: {
    userId,
    // Other user details (if needed) can be included here
  },
  chats: {
    privateChats: userPrivateChats,
    collabChats: userCollabChats,
    teamChats: userTeamChats,
  },
  groups: userGroups,
  teams: userTeams,
  messages: {
    privateMessages: userPrivateMessages,
    collabMessages: userCollabMessages,
    teamMessages: userTeamMessages,
  },
};
