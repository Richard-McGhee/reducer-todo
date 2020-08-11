import React from 'react';

export default function TodoItem(props) {
    return (
        <form>
            <input type="text"
            name="ItemName"
            placeholder="Enter a key name for your task"
            />
            <input type="text"
            name="ItemDescr"
            placeholder="Enter what you need to do"
            />
            <button onClick={evt => {
                evt.preventDefault()
                props.dispatch({ type: "ADDNEW", payload: {
                    id: new Date(),
                    item: evt.currentTarget.form[0].value,
                    description: evt.currentTarget.form[1].value,
                    completed: false
                }})
            }}>Add Item</button>
            <button onClick={evt => {
                evt.preventDefault()
                props.dispatch({ type: "REMOVE"})
            }}>CLEAR ALL</button>
        </form>
    )
}