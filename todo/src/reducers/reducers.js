export const initialState = {
    todo: [{
        id: new Date(),
        item: "Learn about reducers",
        description: "What the name said",
        completed: false
    }]
}

export const reducer = (state, action) => {
    switch(action.type){
        case "ADDNEW":
            if(action.payload !== ""){
                return [...state, action.payload]
            } else{
                return state
            }

        case "REMOVE":
            let filtered = state.filter(item => (
                item.completed === false
            ))
            return filtered
        
        default:
            return state
    }
}