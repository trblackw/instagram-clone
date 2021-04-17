import db from '../../../utils/db'
import { Collections } from '../collections'

export default async (req, res) => {
    try {
        const { slug } = req.body
        const entries = await db.collection(Collections.users).get()
        const entriesData = entries.docs.map(entry => entry.data())

        if (entriesData.some(entry => entry.slug === slug)) {
            res.status(400).end()
        } else {
            const { id } = await db.collection(Collections.users).add(req.body)
            res.status(200).json({ id })
        }
    } catch (e) {
        res.status(400).end()
    }
}
