import db from '../../utils/db'
import { Collections } from './collections'

export default async (req, res) => {
    try {
        const users = await db.collection(Collections.users).get()
        const userData = users.docs.map(entry => ({
            id: entry.id,
            ...entry.data(),
        }))
        res.status(200).json({ users: userData })
    } catch (e) {
        res.status(400).end()
    }
}
