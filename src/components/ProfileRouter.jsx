import { useParams, Navigate } from "react-router-dom";

import Profile from "./Profile";

function ProfileRouter () {
  const {id} = useParams();

  if (id > 0) {
    console.log(id);
    return <Profile/>
  } else {
    return <Navigate to='/home/posts'/>;
  }
}

export default ProfileRouter;