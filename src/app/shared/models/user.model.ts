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
}
