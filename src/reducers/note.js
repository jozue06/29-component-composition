let initialState = []

export default (state=initialState, action) => {
  
  let {type, payload} = action

  switch(type) {
    case 'NOTE_CREATE': return [...state, payload]
    case 'NOTE_UPDATE': return state.map(note => note.id === payload.id ? payload : note)
    case 'NOTE_DELETE': return state.filter(note => note.id !== payload.id)
    case 'NOTE_RESET': return initialState
    default: return state
  }
}