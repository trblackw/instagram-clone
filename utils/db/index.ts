import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'
import { seedDatabase } from './seed'

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            // @ts-ignore
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DB_URL,
        })
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack)
    }
}
export default admin.firestore()
