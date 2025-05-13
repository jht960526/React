import { useEffect, useReducer } from 'react'
import LayOut from './Layout'
import Title from './Title'
import Controls from './Controls'
import TodoList from './TodoList'
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    TOGGLE_TODO_ALL,
    DELETE_TODO_COMPLETED,
    initialState,
    reducer,
    SET_FILTER,
    init,
} from './reducer'

function App() {
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() => {
        window.localStorage.setItem('TODO', JSON.stringify(state.list))
        window.localStorage.setItem('ID', JSON.stringify(state.id))
    }, [state])

    const handleChangeFilterType = (type) => {
        dispatch({ type: SET_FILTER, payload: type })
    }
    const handleSubmit = (value) => {
        dispatch({ type: ADD_TODO, payload: value })
    }
    const handleToggle = (id) => {
        dispatch({ type: TOGGLE_TODO, payload: id })
    }

    const handleToggleAll = (flag) => {
        dispatch({ type: TOGGLE_TODO_ALL, payload: flag })
    }

    const handleDelete = (id) => {
        dispatch({ type: DELETE_TODO, payload: id })
    }

    const handleDeleteCompleted = () => {
        dispatch({ type: DELETE_TODO_COMPLETED })
    }

    const handleUpdate = (id, text) => {
        dispatch({ type: UPDATE_TODO, payload: { id, text } })
    }
    const filterList = state.list.filter((item) => {
        switch (state.filterType) {
            case 'TODO':
                return !item.completed
            case 'COMPLETED':
                return item.completed
            default:
                return true
        }
    })

    return (
        <div>
            <LayOut>
                <Title />
                <Controls
                    filterType={state.filterType}
                    onChangeFilterType={handleChangeFilterType}
                    onSubmit={handleSubmit}
                />
                <TodoList
                    data={filterList}
                    onToggle={handleToggle}
                    onToggleAll={handleToggleAll}
                    onDelete={handleDelete}
                    onDeleteCompleted={handleDeleteCompleted}
                    onUpdate={handleUpdate}
                />
            </LayOut>
        </div>
    )
}

export default App
