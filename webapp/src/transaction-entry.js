import React from 'react'
import { css } from '@emotion/core'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ADD_TRANSACTION = gql`
  mutation addTransaction($description: String!) {
    addTransaction(description: $description) {
      user_id
      description
      merchant_id
      debit
      credit
      amount
    }
  }
`

export function TransactionEntry () {
  let amount, credit, debit, description, merchantId, userId
  return (
    <Mutation mutation={ADD_TRANSACTION}>
      {(addTransaction, { data, loading, error }) => (
        <div css={pageStyle}>
          <form css={formStyle} onSubmit={e => {
            e.preventDefault()
            // this passes
            addTransaction({
              variables: {
                description: description.value
              }
            })
            // this returns a 500
            // addTransaction({
            //   variables: {
            //     user_id: userId.value,
            //     description: description.value,
            //     merchant_id: merchantId.value,
            //     debit: debit.value,
            //     credit: credit.value,
            //     amount: amount.value
            //   }
            // })
            userId.value = ''
            description.value = ''
            merchantId.value = ''
            debit.value = true
            credit.value = false
            amount.value = 0.00
          }}>
            <h4>User ID:</h4>
            <input ref={node => { userId = node }} type='text' />
            <h4>
              Amount:
            </h4>
            <input ref={node => { amount = node }} step='.01' type='number' />
            <h4>
              Description:
            </h4>
            <input ref={node => { description = node }} type='string' />
            <h4>
              Merchant ID:
            </h4>
            <input ref={node => { merchantId = node }} type='string' />
            <h4>
              Credit:
            </h4>
            <input defaultChecked id='credit' name='credit-or-debit' ref={node => { credit = node }} type='radio' value='credit' />
            <h4>
              Debit:
            </h4>
            <input id='debit' name='credit-or-debit' ref={node => { debit = node }} type='radio' value='debit' />
            <span> </span>
            <input type='submit' value='Submit' />
          </form>
        </div>
      )}
    </Mutation>
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
