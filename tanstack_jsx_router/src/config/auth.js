export const auth = {
    isAuthenticated: false,

    login() {
        this.isAuthenticated = true
    },
    logOut() {
        this.isAuthenticated = false
    }
}