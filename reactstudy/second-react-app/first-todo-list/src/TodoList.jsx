import "./TodoList.css"
import TodoItem from './TodoItem'

function TodoList(){
    return(
        <div className="todo-list">
            <div className="todo-header">
                <input type="checkbox" className="todo-checkbox"/>
                <p className="todo-header-text">할 일</p>
                <button className="todo-header-button">삭제</button>
            </div>
            <div>
                <TodoItem/>
            </div>
            <div></div>
        </div>
    );
}

export default TodoList