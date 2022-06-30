import React from 'react'

export default function GoogleAuthBtn({ csrfToken }) {
  return (
    <form action='/api/auth/signin/google' method='POST'>
      <input type='hidden' name='csrfToken' value={csrfToken}></input>
      <button>Google</button>
    </form>
  )
}
