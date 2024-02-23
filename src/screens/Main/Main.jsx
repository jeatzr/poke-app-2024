import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
      <div>
        <Link to="/">
          <h1>Poke-App</h1>
        </Link>
        <ul>
          <li><Link to={'search'}>Search Pokemon</Link></li>
          <li><Link to={'about'}>About</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}
