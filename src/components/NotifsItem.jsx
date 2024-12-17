import { useState, useEffect, useLayoutEffect } from "react";

function NotifsItem() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [list, setList] = useState(JSON.parse(localStorage.getItem('notifList')) || []);
  const [unchecked, setUnchecked] = useState(localStorage.getItem('notifUnchecked') === 'true');

  useEffect(() => {
    if (!dropdownOpen) {
      document.activeElement.blur();
    }
  }, [dropdownOpen]);

  useEffect(() => {
    localStorage.setItem('notifUnchecked', String(unchecked));
  }, [unchecked]);

  useLayoutEffect(() => {
    const newList = ['You have received a friend request', 'X commented on your video', 'You have been tagged in a pictures', 'Login detected'];
    console.log(list);
    console.log(newList);
    if (JSON.stringify(list) !== JSON.stringify(newList)) {
      console.log('trigger unchecked');

      setList(newList);
      localStorage.setItem('notifList', JSON.stringify(newList));

      setUnchecked(true);
    }
  }, []);

  return (
    <>
      <div tabIndex={0} onClick={() => {setDropdownOpen(prev => !prev);setUnchecked(false)}} className="space-y-0.5">
        <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 128">
          <path d="M12.81 46.31c.24.06.49.09.73.09 1.34 0 2.57-.91 2.91-2.27 2.78-11.12 9.4-20.97 18.63-27.71 1.34-.98 1.63-2.85.65-4.19-.98-1.34-2.85-1.63-4.19-.65-10.36 7.57-17.79 18.61-20.91 31.1C10.22 44.28 11.2 45.91 12.81 46.31zM92.93 16.42c9.23 6.74 15.84 16.58 18.63 27.71.34 1.36 1.56 2.27 2.91 2.27.24 0 .49-.03.73-.09 1.61-.4 2.58-2.03 2.18-3.64-3.12-12.48-10.55-23.53-20.91-31.1-1.34-.98-3.21-.69-4.19.65C91.3 13.57 91.59 15.44 92.93 16.42zM19.2 90.85c-.98 3.91-.12 7.98 2.37 11.15 2.48 3.18 6.22 5 10.25 5h14.46c1.43 8.5 8.83 15 17.73 15s16.29-6.5 17.73-15h14.46c4.03 0 7.77-1.82 10.25-5 2.48-3.18 3.34-7.24 2.37-11.15L97.97 47.53C94.07 31.91 80.1 21 64 21S33.93 31.91 30.03 47.53L19.2 90.85zM64 116c-5.58 0-10.27-3.83-11.61-9h23.21C74.27 112.17 69.58 116 64 116zM64 27c13.34 0 24.92 9.04 28.15 21.98l10.83 43.32c.53 2.11.06 4.29-1.27 6.01-1.34 1.71-3.35 2.69-5.52 2.69H31.81c-2.17 0-4.18-.98-5.52-2.69-1.34-1.71-1.8-3.9-1.27-6.01l10.83-43.32C39.08 36.04 50.66 27 64 27z"></path>
        </svg>
        <div className={`h-0.5 w-6 ${unchecked ? 'bg-info' : 'bg-gray-300'}`} />
      </div>
      <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow">
        <h2>Notifications</h2>
        {list.map((item, idx) => {
          return <p key={idx}>{item}</p>
        })}
      </div>
    </>
  )
}

export default NotifsItem;