function Board(props) {
  const { option = 'medium', children } = props;

  let classes;

  switch (option) {
    case 'small':

  }


  return (
    <>
    <div className="flex flex-row flex-auto items-center w-5/6">
      <div className="flex-auto bg-base-100 h-3/4">
        {children}
      </div>
    </div>
    </>
  )
}

export default Board;