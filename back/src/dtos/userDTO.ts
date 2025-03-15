export interface UserRegisterDTO{
    name: string,
    nDni: number,
    email: string,
    birthdate: Date,
    username: string,
    password: string
}

export interface UserCredentialDTO{
    username: string,
    password: string
}

export interface UserLoginDTO{
    login: boolean,
    user: UserDateLoginDTO
}
export interface UserDateLoginDTO{
    id?: number,
    name?: string,
    nDni?: number,
    email?: string,
    birthdate?: Date
}

export interface UserDTO{
    id: number,
    name: string,
    email: string
}