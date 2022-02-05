
interface TechObject {
    title: string,
    experience: number
}


interface user {
    name ?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}


export default function createUser({name, email, password} : user){
    const user ={
        name,
        email,
        password,
    }

    return user;
}