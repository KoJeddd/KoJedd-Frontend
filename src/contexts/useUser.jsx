import { getUser } from "@/lib/actions/chats";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "vm";

const currentUserId = "user_002";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

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

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("You tried to use user context outside its provider");

  return context;
}
export { UserProvider, useUser };
