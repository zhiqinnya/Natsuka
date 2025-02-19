class Message {
  success(message, options = {}) {
    window.$message.success(message, options)
  }
  warning(message, options = {}) {
    window.$message.warning(message, options)
  }
  error(message, options = {}) {
    window.$message.error(message, options)
  }
}

export default Message
