import Search from "./Search";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="flex flex-col min-h-[5rem] justify-center">
      <div className="flex-auto flex flex-row p-3 space-x-3 max-h-[3rem]">
        <div className="flex-1 bg-green-300">
          <p>Forumista</p>
        </div>
        <div className="flex-1 bg-red-400">
          <Search/>
        </div>
        <div className="flex-1 bg-yellow-400">
          <NavItems/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;