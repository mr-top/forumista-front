import { useState, useEffect } from "react";
import Friend from "./Friend";

function Friends () { 
  const friends = [1, 2, 3, 4, 5, 6 ,7, 8]
  return (
    <div className="h-full space-y-2 overflow-y-auto">
      {friends.map(() => <Friend/>)}
    </div>
  )
}

export default Friends;