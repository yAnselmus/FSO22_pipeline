
import anecdoteService from '../services/anecdotes'

const initialState = [ ]

/*const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)*/

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'VOTE':
      //console.log(state)
      //console.log('id: ', action)
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      //console.log('muutettu:',anecdoteToChange)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state
        .map(anecdote =>
          anecdote.id !== id ? anecdote : changedAnecdote)
        .sort( (a1, a2) => a2.votes - a1.votes)

    case 'NEW_ANECDOTE':
      return [...state, action.data]
      
    case 'SET_ANECDOTES':
      return action.data

    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (object) => {
  return {
    type: 'NEW_ANECDOTE',
    data: object
  }
}

export const setAnecdotes = (content) => {
  //console.log('setAnecdotes, content:', content)
  //console.log('setAnecdotes, data:', content.map(asObject))
  return {
    type: 'SET_ANECDOTES',
    data: content
  }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export const newAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
      dispatch(createAnecdote(newAnecdote))
    }
}

export const updateVoteAnecdote = object => {
  const changedAnecdote = { 
    ...object, 
    votes: object.votes + 1
  }

  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateAnecdote(changedAnecdote)
      dispatch(voteAnecdote(updatedAnecdote.id))
  }
}

export default reducer