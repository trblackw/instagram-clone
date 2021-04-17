import firebase from 'firebase'
import { Collections } from '../../pages/api/collections'
import db from '../db'
export function seedDatabase() {
    const users = [
        {
            id: 'LYf3d3mAnDQ3M9D7mQwvH4BkIiz1',
            username: 'trblackw',
            fullName: 'Tucker Blackwell',
            emailAddress: 'tuckerblackwell.dev@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now(),
        },
        {
            id: '2',
            username: 'raphael',
            fullName: 'Raffaello Sanzio da Urbino',
            emailAddress: 'raphael@sanzio.com',
            following: [],
            followers: ['bmjpkU8bBWRse2JwKgzOGTv5tUI3'],
            dateCreated: Date.now(),
        },
        {
            id: '3',
            username: 'dali',
            fullName: 'Salvador Dalí',
            emailAddress: 'salvador@dali.com',
            following: [],
            followers: ['bmjpkU8bBWRse2JwKgzOGTv5tUI3'],
            dateCreated: Date.now(),
        },
        {
            id: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['bmjpkU8bBWRse2JwKgzOGTv5tUI3'],
            dateCreated: Date.now(),
        },
    ]

    for (let k = 0; k < users.length; k++) {
        db.collection(Collections.users).add(users[k])
    }

    for (let i = 1; i <= 5; ++i) {
        db.collection(Collections.photos).add({
            photoId: i,
            userId: '2',
            imageSrc: `/images/users/raphael/${i}.jpg`,
            caption: 'Saint George and the Dragon',
            likes: [],
            comments: [
                {
                    displayName: 'dali',
                    comment: 'Love this place, looks like my animal farm!',
                },
                {
                    displayName: 'orwell',
                    comment: 'Would you mind if I used this picture?',
                },
            ],
            userLatitude: '40.7128°',
            userLongitude: '74.0060°',
            dateCreated: Date.now(),
        })
    }
}
