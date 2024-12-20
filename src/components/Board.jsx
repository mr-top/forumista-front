function Board(props) {
  const { option, extraClass, children } = props;

  let classesX;
  let classesY;

  switch (option) {
    case 'small':
      classesX = 'w-4/6 sm:w-2/6';
      classesY = 'min-h-[20rem] max-h-[30rem]';
      break;
    case 'large':
      classesX = 'w-11/12';
      classesY = 'min-h-[20rem] max-h-[30rem]';
      break;
    default:
      classesX = 'w-5/6 sm:w-4/6';
      classesY = 'min-h-[20rem] max-h-[30rem]';
  }

  return (
    <>
    <div className={`flex flex-row flex-auto items-center my-10 ${classesX}`}>
      <div className={`flex-auto bg-base-100 rounded-md ${classesY} ${extraClass}`}>
        {children}
      </div>
    </div>
    </>
  )
}

export default Board;