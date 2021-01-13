import React, { Fragment } from 'react'
import { css } from '@emotion/core'

export function Home () {
  return (
    <Fragment>
      {/* <Link to='/another'>Another route</Link> */}
      <div css={pageStyle}>
        Let&apos;s do business!
      </div>
    </Fragment>
  )
}

const pageStyle = css`
  background-color: lightblue;
`
