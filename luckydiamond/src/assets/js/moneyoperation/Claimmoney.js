// import { Post } from '../rest/RestMethods.js';
import { BackendApiUrl } from '@/properties/Сonfig.js';
import {GetCookie} from "@/assets/js/storage/CookieStorage";

export async function GettingMoneyOperation(amount) {
    const data = {
        Amount: amount,
        UserCredentials: {
            searchToken: GetCookie('SearchToken'),
            authtoken: GetCookie('AUTHTOKEN')
        }
    };
    try {
        const response = await fetch(`${BackendApiUrl}/payment/donate`, {
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

export async function WithdrawMoneyOperation(amount, card, captchaToken) {
    const data = {
        amount: amount,
        card: card,
        reCaptchaToken: captchaToken,
        userCredentials: {
            searchToken: GetCookie('SearchToken'),
            authtoken: GetCookie('AUTHTOKEN')
        }
    }

    try {
        const response = await fetch(`${BackendApiUrl}/payment/TransferMoneyToSpWorlds`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            redirect: "follow"
        })

        if (!response.ok) {
            console.log("fetch error withdrawmoney operation status:", response.status)
        }

        console.log(response)
        return await response.json()
    }
    catch (error) {
        console.log(`fetch error withdrawmoney operation - ${error}`)
    }
}