class AuthService{
    static loginUser(body){
        return {
            msg : "Login Route"
        }
    }

    static registerUser(body){
        const {name , email } = body;

        

        return {
            name , email 
        }
    }
}

module.exports = AuthService