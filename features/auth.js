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

const createUser = async (data, idProvider, provider) => {
    data.idProvider = [idProvider]
    data.provider = [provider]
    const user = await prisma.user.create({ data })
    return user
}

const logIn = () => { }

export {
    getUserByEmail,
    getUserByIdProvider,
    createUser,
    logIn
}
