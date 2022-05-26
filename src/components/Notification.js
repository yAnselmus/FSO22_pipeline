
import { connect } from 'react-redux' 

const Notification = (props) => {
  const notification = props.notification
  const styleShow = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const styleHide = {
    display: 'none'
  }

  if (notification.show) {
    return (
      <div style={styleShow}>
        {notification.content}
      </div>
    )
  } else {
    return (
      <div style={styleHide}>
      {notification.content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps
)(Notification)