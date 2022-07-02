import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function initializeDB() {
	return Promise.all([
		prisma.user.deleteMany()
	])
}