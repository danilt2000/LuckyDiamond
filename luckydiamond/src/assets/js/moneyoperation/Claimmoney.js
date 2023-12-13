import { Post } from '../rest/RestMethods.js';
// import { BackendApiUrl } from '@/properties/Сonfig.js';

export async function GettingMoneyOperation(amount) {
    try {
        const response = await Post('https://spsystemcore20231122004605.azurewebsites.net/api/payment/donate', amount)

        console.log(response)
        return response
    }
    catch (e) {
        console.error('Error in ClaimMoney method: ', e)
    }
}