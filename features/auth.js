import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getUserByEmail = () => {
    return 'Edgar'
}

const getUserByIdProvider = async (idProvider) => {
    return await prisma.user.findFirst({
        where: {
            idProvider: {
                has: idProvider
            }
        }
    })
}

const logIn = () => { }

export {
    getUserByEmail,
    getUserByIdProvider,
    logIn
}
