import { useState, useEffect, useLayoutEffect } from "react";

function FriendsItem() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [list, setList] = useState(JSON.parse(localStorage.getItem('friendList')) || []);
  const [unchecked, setUnchecked] = useState(localStorage.getItem('friendUnchecked') === 'true');

  useEffect(() => {
    if (!dropdownOpen) {
      document.activeElement.blur();
    }
  }, [dropdownOpen]);

  useEffect(() => {
    localStorage.setItem('friendUnchecked', String(unchecked));
  }, [unchecked]);

  useLayoutEffect(() => {
    const newList = ['Callum sent you a friend request', 'Pauline sent you a friend request', 'Martin sent you a friend request'];
    console.log(list);
    console.log(newList);
    if (JSON.stringify(list) !== JSON.stringify(newList)) {
      console.log('trigger unchecked');

      setList(newList);
      localStorage.setItem('friendList', JSON.stringify(newList));

      setUnchecked(true);
    }
  }, []);

  return (
    <>
      <div tabIndex={0} onClick={() => { setDropdownOpen(prev => !prev); setUnchecked(false) }} className="space-y-0.5">
        <img className="h-6 w-6" src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-friend-friendship-wanicon-lineal-wanicon.png" alt="external-friend-friendship-wanicon-lineal-wanicon" />
        <div className={`h-0.5 w-6 ${unchecked ? 'bg-info' : 'bg-gray-300'}`} />
      </div>
      <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow">
        <h2>Friend Requests</h2>
        {list.map((item, idx) => {
          return <p key={idx}>{item}</p>
        })}
      </div>
    </>
  )
}

export default FriendsItem;