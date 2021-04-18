import React from 'react'
import { useRouter } from 'next/router'

const Profile = () => {
    const router = useRouter()
    console.log(router.query)
    return <div>Profile</div>
}

export default Profile
