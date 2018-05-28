'use strict'

class Response {
  constructor (status, success, message, data) {
    this.status = status
    this.success = success
    this.message = message
    this.data = data
  }

  setStatus (status) {
    this.status = status
  }

  getStatus (status) {
    return this.status
  }

  setSuccess (success) {
    this.success = success
  }

  getSuccess () {
    return this.success
  }

  setMessage (message) {
    this.message = message
  }

  getMessage () {
    return this.message
  }

  setData (data) {
    this.data = data
  }

  getData () {
    return this.data
  }

  getResult () {
    return {
      'status': this.status,
      'success': this.success,
      'message': this.message,
      'data': this.data
    }
  }
}

module.exports = {
  Response,
  success: new Response(200, 1, '成功', {}),
  failed: new Response(400, 0, '失败', {})
}
