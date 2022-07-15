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

export const getAll = async (filter) => {
  return await prisma.home.findMany({
    where: filter, 
    include: {
      location: true
    }
  })
}

export const getOne = async (id) => {
  return await prisma.home.findUnique({
    where: {
      id
    }, 
    include: {
      location: true
    }
  })
}

export const deleteOne = async (id) => {
  return await prisma.home.delete({
    where: {
      id
    }
  })
}