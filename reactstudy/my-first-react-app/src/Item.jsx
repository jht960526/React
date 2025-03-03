const Item = ({isDone}) => {

  if(isDone){
    return <div>Done</div>
  }
  return (
    <div>
      Todo
    </div>
  );
}

/*
const Item = ({isDone}) =>{
  let text = "Todo";
  if(isDone){
  text = "Done";
  }
  return <div>{text}</div>
  };

const Item = ({isDone}) =>{
  return <div>{isDone ? "Done" : "Todo"}</div>
  };

*/

export default Item;