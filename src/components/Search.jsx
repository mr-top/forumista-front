import { useState, useEffect, useRef } from "react";

function Search() {
  const [input, setInput] = useState('Hello');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownInput = useRef();

  function toggleDropdown () {
    setDropdownOpen(prev => !prev);
  }

  useEffect(() => {
    if (dropdownOpen) {
      dropdownInput.current.focus();
    } else {
      dropdownInput.current.blur();
    }
  }, [dropdownOpen]);

  return (
    <div className="dropdown dropdown-bottom dropdown-end w-full">
      <label onClick={toggleDropdown} tabIndex={0} className="h-[2rem] input input-bordered flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
        <input ref={dropdownInput} type="text" className="grow text-sm" placeholder="Search" onChange={e => setInput(e.target.value)} value={input}/>
      </label>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  )
}

export default Search;