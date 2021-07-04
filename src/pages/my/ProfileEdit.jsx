import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'

import FormsMyProfile from '@/forms/my/Profile'

import Loading from '@/components/Loading'

class PagesProfileEdit extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    return (
      <div id="pages-auth-signup" className="container text-center my-3">
        <h1 className="mb-3">Profile Edit Page</h1>

        <div className="row justify-content-around text-left">
          <div className="col-12 col-md-5 col-lg-4">
            <FormsMyProfile />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <CardGroup>
              <Card>
                <div style={{height: 160 + 'px', width: 100 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 160 + 'px', width: 100 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 160 + 'px', width: 100 + 'px'}}></div>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <div style={{height: 160 + 'px', width: 100 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 160 + 'px', width: 100 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 160 + 'px', width: 100 + 'px'}}></div>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    )
  }
}

PagesProfileEdit.propTypes = {
  history: PropTypes.shape().isRequired,
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileEdit)
