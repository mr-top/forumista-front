import { useState, useEffect, useLayoutEffect, useRef } from "react";

import Post from "./Post";

function Posts () {
  const postsRef = useRef(null);
  const [items, setItems] = useState(['', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(postsRef.current)
  }, []);

  useEffect(() => {
    console.log('scrolling')
    postsRef.current.addEventListener('scroll', handleScroll);
    return () => postsRef.current.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useLayoutEffect(() => {
    fetchData();
  }, []);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function fetchData () {
    setIsLoading(true);

    await sleep(1000);
    setItems(prev => [...prev, `post ${Math.floor(Math.random() * 100)}`]);

    setPage(prev => prev + 1);

    setIsLoading(false);
  }

  async function handleScroll () {
    console.log(`scroll top ${postsRef.current.scrollTop}`);
    console.log(`scroll height ${postsRef.current.scrollHeight}`);
    console.log(`clientHeight ${postsRef.current.clientHeight}`);
    if (postsRef.current.scrollHeight - postsRef.current.scrollTop !== postsRef.current.clientHeight || isLoading) {
      return;
    }
    await fetchData()
  }

  return (
    <div ref={postsRef} className="h-full overflow-y-scroll space-y-2">
      {items.map((post, idx) => <Post postId={idx}/>)}
      {isLoading && <p>Fetching more posts</p>}
    </div>
  )
}

export default Posts;