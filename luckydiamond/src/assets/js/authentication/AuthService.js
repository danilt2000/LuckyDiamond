import { Post } from '../rest/RestMethods.js';
import { BackendApiUrl } from '@/properties/Сonfig.js';

export function
    LogIn(authCode) {
    return Post(BackendApiUrl + "/LogIn", { code: authCode }).then((data) => {
        console.log(data);
        return data;
    }).catch(error => {
        console.log(error)
    });
}
