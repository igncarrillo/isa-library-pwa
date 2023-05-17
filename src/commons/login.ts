import {basepath} from "./configs";

export interface Token {
    id_token: string
}

let globalToken: any = null;

export function getToken() {
    return globalToken;
}

function setToken(newToken: string) {
    globalToken = newToken;
}

export async function login() {
    const response = await fetch(basepath + '/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: 'user',
            password: 'user'
        }),
    });

    if (!response.ok) {
        throw new Error('Authentication failed');
    }

    console.log("successfully login")
    const token: Token = await response.json();
    setToken(token.id_token)
}