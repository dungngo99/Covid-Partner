import React from 'react'
import {Link} from 'react-router-dom'
import * as routes from '../constants'

const index = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${routes.HOME}`}>Home</Link>
        </li>
        <li>
          <Link to={`${routes.ACCOUNT}`}>Account</Link>
        </li>
        <li>
          <Link to={`${routes.ACCOUNT}`}>Discussion</Link>
        </li>
        <li>
          <Link to={`${routes.SIGN_IN}`}>Login</Link>
        </li>
        <li>
          <Link to={`${routes.SIGN_UP}`}>Register</Link>
        </li>
      </ul>
    </div>
  )
}

export default index
