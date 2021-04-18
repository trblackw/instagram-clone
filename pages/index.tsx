import React from 'react'
import { NextPage } from 'next'
import api from '../utils/api'

const Home: NextPage<{ users: any[] }> = ({ users }) => {
    React.useEffect(() => {
        console.log(users)
    }, [users])

    return <div className="text">Hello world</div>
}

async function getUsers() {
    const res = await api.get('/api/users')
    return {
        users: res.data,
    }
}

Home.getInitialProps = async () => getUsers()

export default Home
