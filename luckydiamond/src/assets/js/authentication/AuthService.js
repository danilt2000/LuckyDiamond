import { Post } from '../rest/RestMethods.js';
import { BackendApiUrl } from '@/properties/Сonfig.js';

export async function LogIn(authCode) {
    try {
        const response = await Post(BackendApiUrl + "/Authorize/LogIn", { code: authCode });

        return response;
    } catch (error) {
        console.error('Error in LogIn:', error);
    }
}