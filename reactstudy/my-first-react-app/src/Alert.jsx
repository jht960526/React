const Alert = () =>{
  const handleClick = () => alert("Hello");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Alert;