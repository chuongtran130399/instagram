import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";


const Sidebar = () => {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();

  console.log("following", following);
  return (
    <div>
      <User username={username} fullName={fullName} following={following}/>
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
    </div>
  );
};

export default Sidebar;