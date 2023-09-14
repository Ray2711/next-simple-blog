
const AuthStorage = class{
    constructor(){
        
    }
    
    
    getToken(){
        let res = localStorage.getItem("token") || ""
        return res;
    }
    setToken(token){
        localStorage.setItem("token",token)
    }
    getName(){
        let res = localStorage.getItem("name") || ""
        return res;
    }
    setName(name){
        localStorage.setItem("name",name)
    }
    getUsername(){
        let res = localStorage.getItem("username") || ""
        return res;
    }
    setUsername(name){
        localStorage.setItem("username",name)
    }
    setId(id){
        localStorage.setItem("id",id)
    }
    getId(){
        let res = localStorage.getItem("id") || ""
        return res;
    }
    clearAll(){
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("username")
        localStorage.removeItem("id")
    }

    setUserInfo(obj,token){
        this.setName(obj.name)
        this.setToken(token)
        this.setUsername(obj.username)
        this.setId(obj.id)
    }

    getUserInfo(){
        return {
            name : this.getName(),
            username :this.getUsername(),
            token: this.getToken(),
            id: this.getId()
        }
    }

    clearUserInfo(){
        this.clearAll()
    }

}
const as = new AuthStorage();
export default as;