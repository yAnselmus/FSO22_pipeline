import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    content: 'mormo!',
    show: false,
}

let timeoutID = -1

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayNotification(state, action) {
      return ({
          content: action.payload,
          show: true
      })
    },
    deleteNotification(state, action) {
        timeoutID = -1
        return ({
            content: '',
            show: false
        })
    }
  },
})

export const setNotification = (content, time) => {  
    
    return async dispatch => {
        dispatch(displayNotification(content))

        if(timeoutID>0) {
            clearTimeout(timeoutID)
        }
        
        timeoutID=setTimeout(() => {
        dispatch(deleteNotification())
        }, time*1000) 
    }
    
}

export const { displayNotification, deleteNotification } = notificationSlice.actions
export default notificationSlice.reducer