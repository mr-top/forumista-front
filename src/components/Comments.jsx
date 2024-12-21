import Comment from "./Comment";

function Comments() {
  const comments = ['', '', '', '', '', ''];

  return (
    <div className="space-y-2">
      <ul className="p-3 space-y-2 bg-base-200 max-h-48 overflow-y-auto">
        {comments.map(() => <Comment />)}
      </ul>
      <div className="flex space-x-2 px-3">
        <input type="text" placeholder="type here" className="input input-bordered w-full h-8"/>
        <button className="btn btn-sm">Comment</button>
      </div>
    </div>
  )
}

export default Comments;