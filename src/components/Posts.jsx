import { useEffect, useRef } from "react";

function Posts () {
  const postsRef = useRef(null);

  useEffect(() => {
    console.log(postsRef.current.clientHeight)
    console.log(postsRef.current.clientWidth)
  }, []);

  return (
    <div ref={postsRef} className="h-full bg-pink-500">
      
    </div>
  )
}

export default Posts;