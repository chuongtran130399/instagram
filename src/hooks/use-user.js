import React from "react";
import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

const useUser = (userId) => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
      async function getUserObjByUserId() {
          const [response] = await getUserByUserId(user.uid);
          setActiveUser(response);
      }
      if (user?.uid) {
          getUserObjByUserId(user);
      }
  },[user]);
  return {user: activeUser};
};

export default useUser;
