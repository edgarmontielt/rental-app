import { createHome } from "../features/homes"

describe('Homes', () => {
  it('should create a new home', async () => {
    const data = {
      homeDetails: {
        title: 'Familiar House with good location',
        description: '30 rooms',
        images: [
          'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
        ],
        price: 500560.90,
        type: 'HOUSE'
      },
      locationDetails: {
        country: 'México',
        state: 'Tlaxcala',
        city: 'Tlaxcala',
        street: 'test street',
        number: 239,
        zipCode: 90299
      }
    }
    const home = await createHome(data)
    expect(home).toBeDefined()
    expect(home).not.toBeNull()
    expect(home).toMatchObject({
      title: 'Familiar House with good location',
      images: [
        'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
      ],
      description: '30 rooms',
      price: 500560.9,
      type: 'HOUSE',
      location: {
        country: 'México',
        state: 'Tlaxcala',
        city: 'Tlaxcala',
        street: 'test street',
        number: 239,
        zipCode: 90299,
      }
    })
  })
})