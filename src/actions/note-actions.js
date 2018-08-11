import uuid from 'uuid/v4'

export const addNote = note => {
  note.id = uuid()
  return {
    type: 'NOTE_CREATE',
    payload: note,
  }
}

export const noteUpdate = note => ({
  type: 'NOTE_UPDATE',
  payload: note,
})

export const noteDelete = note => ({
  type: 'NOTE_DELETE',
  payload: note,
})

export const noteReset = () => ({ type: 'NOTE_RESET' })