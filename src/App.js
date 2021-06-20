import React, { useState, useRef } from "react";
const Todo = () => {
    const [list, setList] = useState([
        { id: 1, item: "Fix bugs" },
        { id: 2, item: "Take out the trash" }
    ]);
    const todoRef = useRef();
    const removeTodo = id => {
        setList(list.filter(todo => todo.id !== id));
    };
    const addList = data => {
        let id = list.length + 1;
        setList([
            ...list,
            {
                id,
                item: data
            }
        ]);
    };
    const handleNewTodo = e => {
        e.preventDefault();
        const item = todoRef.current;
        addList(item.value);
        item.value = "";
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Add Todo</h2>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            autoFocus
                            ref={todoRef}
                            placeholder="Enter a task"
                            className="form-control"
                            data-testid="input"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button
                            type="submit"
                            onClick={handleNewTodo}
                            className="btn btn-primary"
                        >
                        Add Task
                        </button>
                    </div>
                </div>
            </form>
            <div className="row todo-list">
                <div className="col-md-6">
                    <h3>Lists</h3>
                    {!list.length ? (
                        <div className="no-task">No task!</div>
                    ) : (
                        <ul data-testid="list">
                            {list.map(todo => {
                                return (
                                    <li key={todo.id}>
                                        <div>
                                            <span>{todo.item}</span>
                                            <button
                                                className="btn btn-danger"
                                                data-testid="delete-button"
                                                onClick={() => removeTodo(todo.id)}
                                            >
                                                删除
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Todo;