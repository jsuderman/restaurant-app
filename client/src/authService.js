import Axios from "axios";

const authService = {
    isAuthenticated() {
        return sessionStorage.getItem("auth")=== "true"

    }
}

export default authService;