enum Endpoints {
    dashboard = '/',
    login = '/login',
    signup = '/signup',
    profile = '/profile',
    users = '/users',
    photos = '/photos',
}

class EndpointManager {
    private static includePreface(route: string) {
        return `/api/${route}`
    }
    get dashboard() {
        return Endpoints.dashboard
    }
    get login() {
        return Endpoints.login
    }
    get signup() {
        return Endpoints.signup
    }
    getProfile(userId: string) {
        return `${Endpoints.profile}/${userId}`
    }
    get users() {
        return Endpoints.users
    }
}

export default new EndpointManager()
