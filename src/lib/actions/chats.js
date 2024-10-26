import axios from "axios";

const { VITE_BASE_URL: baseUrl } = import.meta.env;

async function getUser(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/users/${id}`);

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getUsers(ids) {
  try {
    const { data: allUsers } = await axios.get(`${baseUrl}/users/`);
    const users = allUsers.filter((user) => ids.includes(user.id));

    return users;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getGroup(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/groups/${id}`);

    // console.log(data);

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getGroups(ids) {
  try {
    const { data } = await axios.get(`${baseUrl}/groups`);

    return data.filter((group) => ids.includes(group.id));
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getTeam(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/teams/${id}`);

    console.log({ data });

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getAllUserChats(userId) {
  try {
    const { data: allChats } = await axios.get(`${baseUrl}/chats`);

    const allUserChats = allChats.filter((chat) =>
      chat.participants?.includes(userId),
    );

    return allUserChats;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getUserChats(chatType, userId) {
  try {
    const allUserChats = await getAllUserChats(userId);

    const userChats = allUserChats?.filter(
      (chat) => chat.chatType === chatType,
    );

    return userChats;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function createChat(id, chatType, participants, groupId = null) {
  try {
    const newChat = { id, chatType, participants, groupId };

    const res = await axios.post(`${baseUrl}/chats`, newChat);

    console.log(res);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getFriends(userId) {
  try {
    const { data: user } = await axios.get(`${baseUrl}/users/${userId}`);
    const friendsIds = user.friends;

    const friends = await Promise.all(
      friendsIds.map(async (id) => {
        const { data: friend } = await axios.get(`${baseUrl}/users/${id}`);

        return friend;
      }),
    );

    return friends;
  } catch (error) {
    console.error(error);
  }
}

async function getChatMessages(chatId) {
  try {
    const { data: allMessages } = await axios.get(`${baseUrl}/messages`);
    const messages = allMessages.filter((msg) => msg.chatId === chatId);

    return messages;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getChatSummary(chatId, chatType, currentUserId) {
  let summary;

  try {
    if (chatType === "private") {
      const receiverUser = chatId.split("__")[1];

      const receiverUserData = await getUser(receiverUser);
      const receiverUserMessages = await getChatMessages(chatId);

      summary = {
        id: chatId,
        receiverUserData,
        chatType,
        lastMessage: receiverUserMessages.at(-1),
      };
    }

    return summary;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
async function getBrands(brandIds = []) {
  try {
    const { data: brands } = await axios.get(`${baseUrl}/brands`);
    // const filteredBrands = brands.filter((brand) =>
    //   brandIds.includes(brand.id),
    // );

    return brands;
  } catch (error) {
    console.error(error);
  }
}
export async function getBrand(brandId) {
  try {
    const { data: brands } = await axios.get(`${baseUrl}/brands`);

    const brand = brands.find((br) => br.id === brandId);

    return brand;
  } catch (error) {
    console.error(error);
  }
}
async function getCollab(collabId) {
  try {
    const { data: allChats } = await axios.get(`${baseUrl}/chats`);
    const collabChat = allChats.find((chat) => chat.collabId === collabId);
    console.log(collabChat.participants);
    const collabBrands = await getBrands(collabChat.participants);
    const { data: collab } = await axios.get(
      `${baseUrl}/collabs/${collabChat.collabId}`,
    );

    const collabFullData = {
      brands: collabBrands,
      ...collab,
    };
    return collabFullData;
  } catch (error) {
    console.error(error);
  }
}
async function getAllUserChatsSummary(chatType, currentUserId) {
  let detailedChatsSorted = [];
  let chats = [],
    detailedChats = [];

  try {
    const allUserChats = await getAllUserChats(currentUserId);
    const allChats = await axios.get(`${baseUrl}/chats`);

    switch (chatType) {
      case "collab": {
        chats = await axios.get(`${baseUrl}/chats`);
        chats = chats.data.filter((chat) => chat.chatType === "collab");

        detailedChatsSorted = await Promise.all(
          chats.map(async (chat) => {
            const { data: chatCollabDetails } = await axios.get(
              `${baseUrl}/collabs/${chat.collabId}`,
            );
            const participants = await getBrands(chat.participants);

            return {
              id: chat.id,
              participants,
              ...chatCollabDetails,
              chatType,
              // lastMessage: chat.lastMessage,
            };
          }),
        );
        break;
      }
      case "team":
        {
          chats = allUserChats.filter((chat) => chat.chatType === "team");
          const userTeams = await getUserTeams();
          detailedChatsSorted = userTeams;
        }
        break;
      case "private":
        {
          chats = allUserChats.filter((chat) => chat.chatType === "private");

          detailedChats = await Promise.all(
            chats.map(async (chat) => {
              const receiverUser = chat.participants.find(
                (userId) => userId !== currentUserId,
              );

              const receiverUserData = await getUser(receiverUser);
              const receiverUserMessages = await getChatMessages(chat.id);
              const data = {
                ...receiverUserData,
                ...chat,
                chatType,
                lastMessage: receiverUserMessages.at(-1),
              };
              console.log(data);
              return data;
            }),
          );
          detailedChatsSorted = detailedChats?.sort(
            (a, b) =>
              new Date(b.lastMessage.sentAt) - new Date(a.lastMessage.sentAt),
          );
        }
        break;

      default:
        break;
    }

    return detailedChatsSorted;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
async function getUserTeams() {
  try {
    const { data: allGroups } = await axios.get(`${baseUrl}/groups`);
    const allGroupIds = allGroups.map((group) => group.id);
    const { data: allTeams } = await axios.get(`${baseUrl}/teams`);
    const userTeamsData = allTeams.filter((team) =>
      team.groupIds.some((groupId) => allGroupIds.includes(groupId)),
    );
    // .map(async (team) => {
    //   const groups = await Promise.all(
    //     team.groupIds.map(async (groupId) => {
    //       const group = allGroups.find((gr) => gr.id === groupId);

    //       const groupUsersDetails = await getUsers(group.participants);
    //       return { ...group, participants: groupUsersDetails };
    //     }),
    //   );
    //   return {
    //     ...team,
    //     groups,
    //   };
    // });

    return await userTeamsData;
  } catch (error) {
    console.error(error);
  }
}

async function getUserGroups(userId) {
  try {
    const { data: allGroups } = await axios.get(`${baseUrl}/groups`);
    const userGroups = allGroups.filter((group) =>
      group.participants.includes(userId),
    );
    return userGroups;
  } catch (error) {
    console.error(error);
  }
}

async function postMessage(message) {
  const newMessage = {
    ...message,
  };
  try {
    const res = await axios.post(`${baseUrl}/messages`, newMessage);

    return res;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
// async function getBrands() {
//   try {
//     const { data: brands } = await axios.get(`${baseUrl}/brands`);

//     return brands;
//   } catch (error) {
//     console.error(error);
//   }
// }
async function getUserData(userId) {
  // Assume you have fetched `chats`, `messages`, `groups`, and `teams` data
  let userData = {};

  try {
    const { data: allChats } = await axios.get(`${baseUrl}/chats`);
    const { data: allMessages } = await axios.get(`${baseUrl}/messages`);
    const { data: allGroups } = await axios.get(`${baseUrl}/groups`);
    const { data: allTeams } = await axios.get(`${baseUrl}/teams`);

    const userChats = allChats.filter((chat) =>
      chat.participants.includes(userId),
    );
    const userMessages = allMessages.filter((msg) => {
      const messageChat = userChats.find((chat) => chat.id === msg.chatId);

      if (messageChat.participants.includes(userId)) return msg;
    });
    const userGroups = allGroups.filter((group) =>
      group.participants.includes(userId),
    );
    const userTeams = allTeams.filter((team) =>
      team.groups.some((group) => userGroups.includes(group)),
    );
    // const userTeamsGroups = userTeams.reduce((acc, cur) => {
    //     return
    // }, {});

    userData = { userChats, userMessages, userGroups, userTeams };

    return userData;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  //   Derive user data from fetched data
  const userChats = chats.filter((chat) => chat.participants.includes(userId));

  const userMessages = messages.filter((message) =>
    userChats.some((chat) => chat.chatId === message.chatId),
  );
  const userGroups = groups.filter((group) =>
    group.participants.includes(userId),
  );
  const userTeamIds = userGroups
    .map((group) => group.teamId)
    .filter((teamId) => teamId !== null);
  const userTeams = teams.filter((team) => userTeamIds.includes(team.teamId));
  const userCollabChats = chats.filter(
    (chat) => chat.chatType === "collab" && chat.participants.includes(userId),
  );
  const collabGroupIds = userCollabChats.map((chat) => chat.groupId);
  const collabGroups = groups.filter((group) =>
    collabGroupIds.includes(group.groupId),
  );

  return {
    chats: userChats,
    messages: userMessages,
    groups: userGroups,
    teams: userTeams,
    collabGroups: collabGroups,
  };
}

export {
  getUserData,
  getUser,
  getTeam,
  getUserChats,
  getAllUserChats,
  createChat,
  getChatMessages,
  postMessage,
  getFriends,
  getAllUserChatsSummary,
  getChatSummary,
  getBrands,
  getCollab,
  getGroup,
  getGroups,
  getUserTeams,
  getUsers,
};
