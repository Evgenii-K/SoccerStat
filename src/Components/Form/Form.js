import React from 'react'
import { connect } from 'react-redux'
import { addNewPost } from '../../store/actions'

class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
  }

  submitHandler (event) {
    event.preventDefault()
    const title = this.state.title

    if (!title.trim()) return

    const newPost = {
      id: Date.now().toString(),
      title
    }

    this.props.addNewPost(newPost)

    this.setState({title: ''})
  }

  inputHandler (event) {
    const { name, value }  = event.target
    this.setState({[name]: value})
  }

  render () {
    return (
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Заголовок поста</label>
            <input 
              type="text" 
              className="form-control" 
              id="title"
              value={this.state.title}
              name="title"
              onChange={this.inputHandler}
              />
          </div>
          <button type="submit" className="btn btn-success">Создать</button>
        </form>
    )
  }
}

const mapDispatchToProps = {
  addNewPost
}

export default connect(null, mapDispatchToProps)(Form)