export const tokenService = {
    login,
    logout,
};

function login() {

    let hashParams = {};
    let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    localStorage.setItem('token', hashParams.access_token);

    if (hashParams.access_token)
        return hashParams.access_token
    else
        return null

}

function logout() {
    return "";
}