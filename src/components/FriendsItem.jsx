import { useState, useEffect } from "react";

function FriendsItem() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!dropdownOpen) {
      document.activeElement.blur();
    }
  }, [dropdownOpen]);

  return (
    <>
      <div tabIndex={0} onClick={() => setDropdownOpen(prev => !prev)} className="space-y-0.5">
        <img className="h-6 w-6" src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-friend-friendship-wanicon-lineal-wanicon.png" alt="external-friend-friendship-wanicon-lineal-wanicon" />
        <div className="h-0.5 w-6 bg-info" />
      </div>
      <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow">
        Hello
      </div>
    </>
  )
}

export default FriendsItem;