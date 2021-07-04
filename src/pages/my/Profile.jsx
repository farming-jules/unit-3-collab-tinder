import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Loading from '@/components/Loading'

class PagesProfileShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const { } = this.state

    return (
      <div id="pages-todos-index" className="container text-center my-3">
        <h1 className="mb-3">Profile Show Page</h1>
      </div>
    )
  }
}

PagesProfileShow.propTypes = {
  history: PropTypes.shape().isRequired,
  stateTodos: PropTypes.shape().isRequired,
}

const mapStateToProps = (state) => ({
  stateTodos: state.todos
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileShow)
