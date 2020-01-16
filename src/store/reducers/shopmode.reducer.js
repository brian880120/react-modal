const initState = 'delivery'

const ShopmodeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_MODE':
            return action.mode;
        default:
            return state;
    }
}

export default ShopmodeReducer;
