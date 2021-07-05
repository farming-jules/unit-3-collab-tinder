import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home" className="container">
    <header className="text-center border-bottom">
      <h1>Home Page</h1>
    </header>
    <div className="d-flex justify-content-center align-items-center" style={{height: 80 + 'vh'}}>
      <Link to="/auth/signup">
        <Button variant="warning" type="button">
          Create Account
        </Button>
      </Link>
    </div>
  </div>
)

export default PagesHome
