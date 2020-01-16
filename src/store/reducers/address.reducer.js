const initState = {
    postcode: '',
}

const AddressReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_POSTCODE':
            return {
                ...state,
                postcode: action.postcode,
            };
        default:
            return state;
    }
}

export default AddressReducer;
