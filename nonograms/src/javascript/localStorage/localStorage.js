export function saveDataToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function clearLocalStorage() {
    localStorage.clear();
}