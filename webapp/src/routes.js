import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { TransactionEntry } from './transaction-entry'
import { TransactionTable } from './transaction-table'
import { UserEntry } from './user-entry'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <NavLink
                activeStyle={{ backgroundColor: 'lightblue' }}
                style={{ textDecoration: 'none' }}
                to='/home'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: 'lightblue' }}
                style={{ textDecoration: 'none' }}
                to='/add-transaction'
              >
                +Transaction
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: 'lightblue' }}
                style={{ textDecoration: 'none' }}
                to='/transactions'
              >
                History
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: 'lightblue' }}
                style={{ textDecoration: 'none' }}
                to='/add-user'
              >
                +User
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/home' />
          <Route component={UserEntry} exact path='/add-user' />
          <Route component={TransactionTable} exact path='/transactions' />
          <Route component={TransactionEntry} exact path='/add-transaction' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    padding: 8px;
`

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }

  & > ul > li {

  }
  
  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
`
