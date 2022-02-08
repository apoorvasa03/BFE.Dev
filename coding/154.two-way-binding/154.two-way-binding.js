function model(state, element){
     // 1. initialized the element value with state value
     element.value = state.value

    // 2. Two conditions: 
    // (1) Update the state value, then it will also update element value with new state value
    // (2) Update input element value, then it will also update state value with element value
    Object.defineProperty('state', 'value', {
        get: () =>  element.value,
        set: (value) => element.value = value
    })

    element.addEventListener('change', (event) => {
        state.value = event.target.value
    })
}