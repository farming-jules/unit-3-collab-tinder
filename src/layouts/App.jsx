import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LayoutsNavbar from '@/layouts/Navbar'
import SideBar from "@/layouts/SideBar";

import PagesHome from '@/pages/Home'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesMyIndex from '@/pages/my/Index'
import PagesProfileShow from '@/pages/my/Profile'
import PagesProfileEdit from '@/pages/my/ProfileEdit'

import PagesNotFound from '@/pages/NotFound'



import { getCurrentUser } from '@/actions/my/profile'

class App extends React.Component {
  state = { open: false };

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { open } = this.state;

    return (
      <Router>
        <LayoutsNavbar toggleMenu={this.toggleMenu}/>
        <SideBar open={open} />

        <Switch>
          <Route exact path="/" component={PagesHome} />

          <Route path="/auth">
            <Route exact path="/auth/signup" component={PagesAuthSignup} />
            <Route exact path="/auth/login" component={PagesAuthLogin} />
          </Route>

          <Route path="/my">
            <Route exact path="/my" component={PagesMyIndex} />
            <Route exact path="/my/profile" component={PagesProfileShow} />
            <Route exact path="/my/profile/edit" component={PagesProfileEdit} />
          </Route>

          <Route component={PagesNotFound} />
        </Switch>
      </Router>
    )
  }
}
App.propTypes = {
  getCurrentUser: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getCurrentUser
}
export default connect(null, mapDispatchToProps)(App)



