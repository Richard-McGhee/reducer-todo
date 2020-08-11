export const initialState = [{
        id: new Date(),
        item: "Learn about reducers",
        description: "What the name said",
        completed: false
    }]

export const reducer = (state, action) => {
    switch(action.type){
        case "ADDNEW":
            if(action.payload.item !== ""){
                return [...state, action.payload]
            } else{
                return state
            }

        case "REMOVE":
            let filtered = state.filter(item => (
                item.completed === false
            ))
            return filtered
        
        case "TOGGLE":
            let toggledItem = state.map(item => (
                item.id
            )).indexOf(action.payload.id)
            
            state[toggledItem].completed = !state[toggledItem].completed

            return state
            
        default:
            return state
    }
}