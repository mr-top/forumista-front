import { useState, useEffect } from "react";

import NotifsItem from "./NotifsItem";
import FriendsItem from "./FriendsItem";

function NavItems(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!dropdownOpen) {
      document.activeElement.blur();
    }
  }, [dropdownOpen]);

  return (
    <div className="flex flex-row w-full justify-end items-center space-x-3">
      <div className="dropdown dropdown-bottom dropdown-end">
        <NotifsItem/>
      </div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <FriendsItem/>
      </div>
      <div className="rounded-full border border-black h-8 w-8 overflow-hidden">
        <img src='https://imgix.bustle.com/scary-mommy/2019/11/michael-scott-quotes.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg'></img>
      </div>
      <div>
        <img className='h-6 w-6' src="https://img.icons8.com/ios/50/exit--v1.png" alt="exit--v1" />
      </div>
    </div>
  )
}

export default NavItems;