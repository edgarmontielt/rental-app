// First step: write a test

import { getUserByEmail, logIn } from "../features/auth"

describe('Auth', () => {
  it('verify user exists', () => {
    // Assert -> if getUserByEmail return the str with the value: 'Edgar', the test pass, else the test fails
    expect(getUserByEmail('edgarmt.dev@gmail.com')).toEqual('Edgar')
  })
})