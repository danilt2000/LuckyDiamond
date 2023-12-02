import { Post } from '../rest/RestMethods.js';
import { BackendApiUrl } from '@/properties/Сonfig.js';

// export function
//     LogIn(authCode) {
//     return Post(BackendApiUrl + "/LogIn", { code: authCode }).then((data) => {
//         console.log(data);
//         return data;
//     }).catch(error => {
//         console.log(error)
//     });
// }
export async function LogIn(authCode) {
    try {
        const response = await Post(BackendApiUrl + "/Authorize/LogIn", { code: authCode });

        return response;
    } catch (error) {
        console.error('Error in LogIn:', error);
    }
}