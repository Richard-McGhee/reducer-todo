import React from 'react';

export default TodoItem = () => {
    
    return (
        <form>
            <input type="text"
            name="ItemName"
            placeholder="Enter a key name for your task"
            value={}
            />
            <input type="text"
            name="ItemDescr"
            placeholder="Enter what you need to do"
            value={}
            />
            <button>Add Item</button>
            <button>Remove Item</button>
            <button>CLEAR ALL</button>
        </form>
    )
}