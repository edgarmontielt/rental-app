import React from 'react'

export default function FacebookAuthBtn({ csrfToken }) {
  return (
    <form action='/api/auth/signin/facebook' method='POST'>
      <input type='hidden' name='csrfToken' value={csrfToken}></input>
      <button>Facebook</button>
    </form>
  )
}
