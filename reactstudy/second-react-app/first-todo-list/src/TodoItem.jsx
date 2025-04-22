import { useState } from 'react'
import './TodoItem.css'

function TodoItem({ text, completed, onToggle, onDelete }) {
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit((prev) => !prev)
    }
    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                className='todo-item-checkbox'
                checked={completed}
                onChange={onToggle}
            />
            {edit ? <input /> : <p className='todo-item-text'>{text}</p>}

            <button className='todo-item-button' onClick={handleEdit}>
                수정
            </button>
            <button className='todo-item-button' onClick={onDelete}>
                삭제
            </button>
        </div>
    )
}

export default TodoItem
