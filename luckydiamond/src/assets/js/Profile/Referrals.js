import { BackendApiUrl } from '@/properties/Сonfig.js';
import { GetCookie } from "@/assets/js/storage/CookieStorage";
export async function GetReferralData () {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ARRAffinity=a6e48b9e9d2653435be7b61998d8624b44115214104213d6c8b8c526cc56dc70; ARRAffinitySameSite=a6e48b9e9d2653435be7b61998d8624b44115214104213d6c8b8c526cc56dc70");
  
    const userData = {
      searchToken: GetCookie("SearchToken"),
      authtoken: GetCookie("AUTHTOKEN"),
    };
  
    const raw = JSON.stringify({
      "userCredentials": {
        "searchToken": userData.searchToken,
        "authtoken": userData.authtoken
      }
    });
  
    const response = await fetch(`${BackendApiUrl}/PromoCode/GetReferralInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: raw,
        redirect: "follow"
      });
  
      return await response.json();


}