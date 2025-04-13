const Form = () => {
  const handleSubmit = (event) =>{
    {/* 이벤트 내에서 존재하는 박스에 입력된 값이 변경되지 않는다.*/}
    event.preventDefault();
    const text = event.target.elements.user.value;
    alert(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type = "text" name = "user"/>
      <button>Submit</button>
    </form>
  );
}

export default Form;