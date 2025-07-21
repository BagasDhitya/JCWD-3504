type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increment' | 'decrement'
}

const initialState: CounterState = {
    count: 0
}

export function counterReducer(state = initialState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'decrement':
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}