
import { useSelector, useDispatch } from 'react-redux'
import { updateVoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        if(state.anecdotes.length > 0) {
            console.log('dootit ifin sisällä',state.anecdotes)
            return (
                state.anecdotes
                    .filter(anecdote => 
                        anecdote.content.toLowerCase()
                            .includes(`${state.filter.searchInput.toLowerCase()}`))
            )
        }

    })
  
    const vote = (anecdote) => {
      dispatch(updateVoteAnecdote(anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'.`, 5))
    }

    console.log('render', anecdotes)

    if (anecdotes) {
    return (
        <div>
        {anecdotes
            .map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
        )}
        </div>
        )
    } else {
        return(
            <div>loading anecdotes...</div>
        )
    }
}

export default AnecdoteList