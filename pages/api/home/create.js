import { createHome } from '../../../features/homes'

export default async function newHome(req, res) {
    if (req.method === 'POST') {
        const home = await createHome(req.body)
        
        return res.json(home)
    }
    return res.status(402).json({
        message: 'Method not allowed'
    })
}