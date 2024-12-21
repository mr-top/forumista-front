import { useState, useEffect } from "react";
import Comments from "./Comments";

function Post(props) {
  const { creator, createdTimestamp, likes, comments, postId, ...rest } = props;

  const [likeCount, setLikeCount] = useState(3);
  const [liked, setLiked] = useState(false);
  
  // useEffect(() => {
  //   console.log('runs')
  //   liked ? setLikeCount(prev => prev + 1) : setLikeCount(prev => prev - 1);
  // }, [liked]);

  const post =
    (
      <div key={postId} className="flex flex-col bg-base-100 space-y-1 p-3">

        <div className="flex flex-row space-x-2">
          <div className="rounded-full size-10 border-2 border-black overflow-hidden">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="anonymous profile picture" />
          </div>
          <div>
            <h3>Profile Name</h3>
            <p className="text-xs text-gray-500">2024 / 10 / 8</p>
          </div>
        </div>

        <div className="max-h-48 overflow-y-auto bg-base-200">
          <p className="text-sm p-2">This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour. This is my content. Please do not use green as colour.</p>
        </div>

        <div className="flex flex-row">
          <button onClick={() => setLiked(prev => !prev)} className={`btn btn-xs ${liked && 'btn-primary'} basis-1/3`}>{likeCount > 0 && likeCount} {likeCount > 1 ? 'Likes' : 'Like'}</button>
          <button className="btn btn-xs basis-2/3" onClick={() => document.getElementById('post_modal').showModal()}>Comments</button>
        </div>

      </div>
    )

  return (
    <>
      {post}
      <dialog id="post_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {post}
          <Comments/>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default Post;