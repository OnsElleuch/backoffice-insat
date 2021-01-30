export class User {
    id : number;
    name : string;
    privilege : number; 
    /*  
        administrateur : 1 ,
        prof : 2 , 
        club : 3
    */
    profile_picture : string;
    mail: string;
    password: string;
    description? : string;
    president? : string;
}
