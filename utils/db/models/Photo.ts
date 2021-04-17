import uuidv4 from 'uuid/v4'

export interface Photo {
    id: string
    userId: string
    src: string
    caption: string
    likes: any[]
    comments: PhotoComment[]
    userLatitude: string
    userLongitude: string
    dateCreated: number
}

export interface PhotoComment {
    displayName: string
    comment: string
}

export function generatePhoto(params: Partial<Photo> = {}): Photo {
    return {
        id: uuidv4(),
        userId: '',
        src: '',
        caption: '',
        likes: [],
        comments: [],
        userLatitude: '',
        userLongitude: '',
        dateCreated: Date.now(),
        ...params,
    }
}
