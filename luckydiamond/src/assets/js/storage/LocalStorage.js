export function SaveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export function GetFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function RemoveFromLocalStorage(key) {
    localStorage.removeItem(key);
}

export function ClearLocalStorage() {
    localStorage.clear();
}
