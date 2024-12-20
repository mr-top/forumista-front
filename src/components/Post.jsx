function Post (props) {
  const {creator, createdTimestamp, likes, comments, postId, ...rest} = props

  return (
    <div key={postId} className="flex flex-col bg-yellow-400 space-y-1">
      <div className="flex flex-row space-x-2">
        <div className="rounded-full size-10 border-2 border-black overflow-hidden">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="anonymous profile picture" />
        </div>
        <div>
          <h3>Profile Name</h3>
          <p className="text-xs">2024 / 10 / 8</p>
        </div>
      </div>

      <div className="bg-yellow-600">
        <p className="text-sm p-2">This is my content. Please do not use green as colour</p>
      </div>
    </div>
  )
}

export default Post;