import { useState, useEffect, useRef } from "react";

function Search() {
  const [input, setInput] = useState('');
  const [searchItems, setSearchItems] = useState(JSON.parse(localStorage.getItem('searchItems')) || []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownInput = useRef();

  useEffect(() => {
    if (!dropdownOpen) {
      document.activeElement.blur();
    }
  }, [dropdownOpen]);

  useEffect(() => {
    localStorage.setItem('searchItems', JSON.stringify(searchItems));
  }, [searchItems]);

  function handleSearchSubmit(e) {
    e.preventDefault();

    setSearchItems(prev => {
      if (prev.length > 4) prev.pop();
      return [input, ...prev]
    }
    );
  }

  return (
    <form onClick={() => setDropdownOpen(prev => !prev)} onSubmit={handleSearchSubmit} className="dropdown dropdown-bottom dropdown-end w-full">
      <label tabIndex={0} className="h-[2rem] input input-bordered flex items-center space-x-2">
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
        <input ref={dropdownInput} type="text" className="w-full text-sm" placeholder="Search" onChange={e => setInput(e.target.value)} value={input} />
      </label>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full mt-2 p-2">
        {searchItems.map((item) => <li><a>{item}</a></li>)}
      </ul>
    </form>
  )
}

export default Search;