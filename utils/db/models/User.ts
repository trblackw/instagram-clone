import uuidv4 from 'uuid/v4'

export interface User {
    id: string
    username: string
    name: string
    email: string
    following: string[]
    followers: string[]
    dateCreated: number
}

export function generateUser(params: Partial<User> = {}): User {
    return {
        id: uuidv4(),
        username: '',
        name: '',
        email: '',
        following: [],
        followers: [],
        dateCreated: Date.now(),
        ...params,
    }
}
