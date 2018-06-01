const initialState = {
    todos: []
};

export const todo = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_TODO": {
            // tslint:disable-next-line:no-console
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { text: action.payload, completed: false }
                ]
            };
        }
        case "REMOVE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((item, index) => index !== action.payload)
            };
        }
        default: return state;
    }
};