import React from "react";
import { useState, useContext, useEffect } from "react";
import FirebaseContext from "../context/firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //we have a user we can store the user in localstorage
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //we don't have an authUser we clear the localstorage
        localStorage.removeItem("authUser");
        setUser(null);
      }
     
    });

    return () => listener();
  }, [firebase]);

  return { user };
};

export default useAuthListener;
