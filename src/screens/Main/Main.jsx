import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
      <div>
        <h3>Menú Pokemon:</h3>
        <ul>
          <li><Link to={'search'}>Búsqueda</Link></li>
          <li><Link to={'about'}>A cerca de</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}
