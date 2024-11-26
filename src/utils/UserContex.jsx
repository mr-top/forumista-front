import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider (props) {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  function getUser () {
    return userId;
  }

  function setUser (id) {
    setUserId(id);
  }

  function logOut () {
    setUserId();
  }

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  return (
    <UserContext.Provider value={{getUser, setUser, logOut}}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }