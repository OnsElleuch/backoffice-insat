export class User {
    id : string;
    name : string;
    privilege : number; 
    /*  
        administrateur : 1 ,
        prof : 2 , 
        club : 3
    */
    profile_picture : string;
    email: string;
    password: string;
    description? : string;
    president? : string;

    constructor(id, name, privilege, email, password, profile_picture=null,description=null, president=null){
        this.id=id;
        this.name=name;
        this.privilege= privilege;
        this.email= email;
        this.password= password;
        this.description=description;
        this.profile_picture=profile_picture;
        this.president=president;
    }
}
