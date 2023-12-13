// import { Post } from '../rest/RestMethods.js';
import { BackendApiUrl } from '@/properties/Сonfig.js';

export async function GettingMoneyOperation(amount) {
    // try {
    //     const response = await Post('https://spsystemcore20231122004605.azurewebsites.net/api/payment/donate', { request: amount })

    //     console.log(response)
    //     return response
    // }
    // catch (e) {
    //     console.error('Error in ClaimMoney method: ', e)
    // }


    const data = {
        Amount: amount
    };
    try {
        const response = await fetch(`${BackendApiUrl}/api/payment/donate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            redirect: "follow"
        });

        if (!response.ok) {
            console.log("Fetch error:", response.status);
        }
        console.log(response)

        return await response.json();
    } catch (error) {
        console.log("Fetch error:", error);
    }

}