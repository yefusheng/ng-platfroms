var AuthService = (function () {
    function AuthService() {
        this.token = "";
    }
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    return AuthService;
}());
export { AuthService };
