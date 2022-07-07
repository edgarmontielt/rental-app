// First step: write a test
import { createUser, getUserByIdProvider } from "../features/auth"
import { initializeDB } from './config/db'

beforeAll(() => {
  return initializeDB()
})

// afterAll(() => {
//   return initializeDB()
// })

describe('Auth', () => {
  /*it('verify user exists', () => {
    // Assert -> if getUserByEmail return the str with the value: 'Edgar', the test pass, else the test fails
    expect(getUserByEmail('edgarmt.dev@gmail.com')).toEqual('Edgar')
  }) */
  it('verify user does not exists', async () => {
    const user = await getUserByIdProvider('1955230281348319')
    expect(user).toEqual(null)
  })
  it('should create user', async () => {
    let data = {
      name: 'Edgar',
      email: 'edgarmt.dev@gmail.com',
      photoURL: 'http://www.photo.com'
    }
    const user = await createUser(data, '1955230281348319', 'facebook')

    // expect(user).not.toBeUndefined()
    expect(user).toBeDefined()
    expect(user).not.toBeNull()
    expect(user).toMatchObject({
      idProvider: ['1955230281348319'],
      provider: ['facebook'],
      email: 'edgarmt.dev@gmail.com',
      name: 'Edgar',
      photoURL: 'http://www.photo.com',
      role: 'USER'
    })
  })
})