import React from 'react'

export function TransactionEntry () {
  return (
    <div>
      <form>
        <label>
          First Name:
          <input name='first' type='text' />
        </label>
        <label>
          Last Name:
          <input name='last' type='text' />
        </label>
        <label>
          Debit:
          <input name='debit' type='bool' />
        </label>
        <label>
          Credit:
          <input name='credit' type='bool' />
        </label>
        <label>
          Merchant ID:
          <input name='merchant' type='string' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
