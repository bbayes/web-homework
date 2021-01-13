import React from 'react'
import { css } from '@emotion/core'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const getTransactions = gql`
{
  transactions {
    user_id
    description
    merchant_id
    debit
    credit
    amount
  }
}`

export function TransactionTable () {
  return (
    <Query query={getTransactions} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading…</p>
        if (error) return <p>Error :(</p>
        return (
          <div css={pageStyle}>
            <div css={gridStyle}>
              <h4>User ID</h4>
              <h4>Amount</h4>
              <h4>Description</h4>
              <h4>Merchant ID</h4>
              <h4>Debit</h4>
              <h4>Credit</h4>
            </div>
            {data.transactions.map((t) => (
              <div css={gridStyle} key={t.user_id}>
                <p>{t.user_id}</p>
                <p>{t.amount}</p>
                <p>{t.description}</p>
                <p>{t.merchant_id}</p>
                <p>{t.debit}</p>
                <p>{t.credit}</p>
              </div>
            ))}
          </div>
        )
      }}
    </Query>
  )
}

const pageStyle = css`
  background-color: lightblue;
`
const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  padding: 8px;

  & > h4 {
    text-align: left;
  }
`
