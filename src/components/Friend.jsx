import { useState, useEffect } from "react";

function Friend() {
  return (
    <div className="flex rounded-md h-10 bg-base-200 p-1">
      <div className="basis-1/12">
        <div className="rounded-full border-black border-[1px] overflow-hidden size-8">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="anonymous profile picture" />
        </div>
      </div>
      <div className="basis-4/12 px-1">
        <p className="text-xs">Profile Name</p>
        <p className="text-xs">Offline</p>
      </div>
      <div className="basis-7/12 text-end px-2">
        <p className="text-xs">Last seen: 22 / 12 / 24</p>
      </div>
    </div>
  )
}

export default Friend;