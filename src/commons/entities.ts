import {getToken, login} from "./login";
import {basepath} from "./configs";

export async function getEntity(path: string) {
    if (getToken() === null) {
        await login();
    }

    const response = await fetch(basepath + path, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch book list');

    }
    console.log(`retrieved ${path}`)
    return await response.json();
}