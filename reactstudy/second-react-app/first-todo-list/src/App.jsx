import { useState } from 'react'
import { useRef } from 'react'
import LayOut from './Layout'
import Title from './Title'
import Controls from './Controls'
import TodoList from './TodoList'

function App() {
    const idRef = useRef(0)
    const [list, setList] = useState([])
    const [filterType, setFilterType] = useState('ALL')
    const handleChangeFilterType = (type) => {
        setFilterType(type)
    }
    const handleSubmit = (value) => {
        setList((preList) =>
            preList.concat({
                id: (idRef.current += 1),
                text: value,
                completed: false,
            })
        )
    }
    const handleToggle = (id) => {
        setList((preList) =>
            preList.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleToggleAll = (flag) => {
        setList((prevList) =>
            prevList.map((item) => ({ ...item, completed: flag }))
        )
    }

    const handleDelete = (id) => {
        setList((preList) => preList.filter((item) => item.id !== id))
    }

    const handleDeleteCompleted = () => {
        setList((prevList) => prevList.filter((item) => !item.completed))
    }

    const handleUpdate = (id, text) => {
        setList((prevList) =>
            prevList.map((item) => {
                if (item.id === id) {
                    return { ...item, text }
                }
                return item
            })
        )
    }
    const filterList = list.filter((item) => {
        if (filterType === 'ALL') {
            return item
        } else if (filterType === 'TODO') {
            return !item.completed
        } else {
            return item.completed
        }
    })

    return (
        <div>
            <LayOut>
                <Title />
                <Controls
                    filterType={filterType}
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
