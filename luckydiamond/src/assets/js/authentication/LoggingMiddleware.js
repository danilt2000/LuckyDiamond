export function
    GetAuthCodeFromCurrentPath() {
    const currentPath = window.location.pathname;

    const parts = currentPath.split('/');

    const code = parts[parts.length - 1];

    return code
}
