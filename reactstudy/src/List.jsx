const List = () => {
  const items = ["Apple","Banana","Chery"];
  
  return (
    <ul>
      {items.map((item)=>(
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export const FilteredList = ()=>{
  const items = [
    {id:1,
      text:"learn react",
      completed: true,
    },
    {id:2,
      text:"build ui",
      completed: true,
    },
    {id:3,
      text:"fetch API",
      completed: true,
    }
  ];

  return(
    <ul>
      {items
      .filter((i) => i.completed  === false)
      .map((i) => (
        <li>{i.text}</li>
      )) }
    </ul>
  );
};

export default List;