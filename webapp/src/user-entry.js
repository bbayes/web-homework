import React from 'react'
import { css } from '@emotion/core'

export function UserEntry () {
  return (
    <div css={pageStyle}>
      <form css={formStyle}>
        <h4>
          First Name:
        </h4>
        <input name='first' type='text' />
        <h4>
          Last Name:
        </h4>
        <input name='last' type='text' />
        <h4>
          Date of Birth:
        </h4>
        <input name='dob' type='text' />
        <span> </span>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

const pageStyle = css`
  background-color: lightblue;
`

const formStyle = css`
  display: grid;
  grid-template-columns: 130px 400px;
  #grid-template-rows: 30px 30px 30px 30px 30px 30px 30px;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 8px;

  & > h4 {
    text-align: right;
  }
`
