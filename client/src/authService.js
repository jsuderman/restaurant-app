
const authService = {
    isAuthenticated() {
        return sessionStorage.getItem("auth")=== "true"

    }
}

export default authService;