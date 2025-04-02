import { BackendApiUrl } from '@/properties/Сonfig.js';
import { GetCookie } from "@/assets/js/storage/CookieStorage";
export async function GetReferralData () {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
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

export async function WithdrawReferralMoney () {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

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

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://casino.chasman.engineer/api/PromoCode/TakeMoneyReferral", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}