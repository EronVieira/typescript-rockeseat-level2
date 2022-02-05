import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request ,response: Response){

    const user = createUser({
        techs:[ 'Node.js','ReactNative',{ title: 'Javascript',experience: 100}],
        email: 'eron@email.com',
        password:'senha123',
    });
    return response.json({ message: `Hello World`})
}
