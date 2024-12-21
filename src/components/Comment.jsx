function Comment () {
  return (
    <li className="flex flex-row space-x-2">
      <div className="rounded-full size-6 overflow-hidden">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="anonymous profile picture" />
      </div>
      <div>
        <p className="text-xs">Profile Name</p>
        <p className="text-sm">My Comment is my comment</p>
      </div>
    </li>
  )
}

export default Comment;