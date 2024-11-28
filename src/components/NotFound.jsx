import Board from "./Board";

function NotFound () {
  return (
    <Board option='small'>
      <div className="flex flex-row items-center h-full m-5">
        <div className="flex flex-col flex-auto items-center">
          <div className="flex-auto max-w-[20rem] space-y-3">
            <p className="text-2xl text-center">404 Not Found</p>
            <p>The page that you are looking for is not found. Please navigate to other accessible pages below</p>
            <div className="flex flex-col">
              <a className="link flex-none">Home</a>
              <a className="link flex-none">Help And Support</a>
            </div>
            <p>If you believe this was an error. Contact us at <a className="link">generic@help.com</a></p>
          </div>
        </div>
      </div>
    </Board>
  )
}

export default NotFound;