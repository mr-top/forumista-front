function Board(props) {
  const { option, children } = props;

  let classesX;
  let classesY;

  switch (option) {
    case 'small':
      classesX = 'w-4/6 sm:w-2/6';
      classesY = 'min-h-[10rem]';
      break;
    case 'large':
      classesX = 'w-5/6 sm:w-5/6';
      classesY = 'min-h-[10rem]';
      break;
    default:
      classesX = 'w-5/6 sm:w-4/6';
      classesY = 'min-h-[10rem]';
  }

  return (
    <>
    <div className={`flex flex-row flex-auto items-center my-10 ${classesX}`}>
      <div className={`flex-auto bg-base-100 rounded-md ${classesY}`}>
        {children}
      </div>
    </div>
    </>
  )
}

export default Board;