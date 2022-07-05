import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createHome = async (data) => {
  const { homeDetails, locationDetails } = data
  const home = await prisma.home.create({
    data: {
      ...homeDetails,
      location: {
        create: {...locationDetails}
      }
    },
    include: {location: true}
  })
  return home
}