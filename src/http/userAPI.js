import { $authHost, $host } from "./index" 

export const registration = async (login , password) => {
    const response = await $host.post( 'api/user/registration', {login,password, role: 'ADMIN'})
    return response
}

export const login = async (login , password) => {
    alert(login+"    "+password)
    const response = await $host.post( 'api/user/login', {login,password})
    return response
}

export const check = async () => {
    const response = await $host.post( 'api/user/registration', { role: 'ADMIN'})
    return response
}