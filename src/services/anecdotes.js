
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll asdf = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data}

const updateAnecdote = async (object) => {
    const response = await axios.put(`${baseUrl}/${object.id}`, object)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, updateAnecdote }