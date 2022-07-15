import prisma from "../../libs/db"

export async function initializeDB() {
	return Promise.all([
		prisma.user.deleteMany(),
		prisma.location.deleteMany(),
		prisma.home.deleteMany(),
	])
}