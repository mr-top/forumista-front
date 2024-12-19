import Board from "./Board";

function Home() {
  return (
    <Board option='large' extraClass='h-full drawer-end'>
      <div className="flex flex-row h-full drawer-content">

        <div className="flex flex-col basis-1/4 md:basis-1/6">
          <label htmlFor="my-drawer" className="btn btn-sm btn-primary w-full drawer-button md:hidden">Open Chat</label>
          <div className="basis-2/3 md:basis-1/3 bg-green-700">
            Fav Shortcuts
          </div>
          <div className="basis-1/3 md:basis-2/3 bg-green-400">
            Shortcuts
          </div>
        </div>

        <div className="flex flex-col basis-3/4 md:basis-3/6">
          <div className="basis-full bg-red-400">
            Main
          </div>
        </div>

        <div className="flex-col hidden md:flex md:basis-2/6">
          <div className="basis-2/6 bg-blue-700">
            Friends
          </div>
          <div className="basis-4/6 bg-blue-400">
            Live Chat
          </div>
        </div>

      </div>

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 h-full w-80 p-4">
          <div className="flex flex-col h-full">
            <div>
              <label htmlFor="my-drawer" className="btn btn-sm btn-primary w-full drawer-button">Close Chat</label>
            </div>
            <div className="basis-2/6 bg-blue-700">
              Friends
            </div>
            <div className="basis-4/6 bg-blue-400">
              Live Chat
            </div>
          </div>
        </div>
      </div>
    </Board>
  )
}

export default Home;