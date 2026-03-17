export const auth = {
    isAuthenticate: false,

    login() {
        this.isAuthenticate = true
    },
    logOut() {
        this.isAuthenticate = false
    }
}