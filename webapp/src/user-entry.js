import React from 'react'

export function UserEntry () {
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
          Date of Birth:
          <input name='dob' type='text' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
