import React from 'react';

export default function TodoList(props) {
    return (
        <div>
            {props.list.map(item => (
                
                    <h3 key={item.id} 
                    className={item.completed? "completed" : ""}
                    onClick={evt => {
                        props.dispatch({ type: "TOGGLE", payload: item})
                        evt.target.className = item.completed? "completed" : ""
                    }}>
                        Item: {item.item}  Description: {item.description}
                        {console.log(item)}
                    </h3>
                
            ))}
        </div>
    )
}