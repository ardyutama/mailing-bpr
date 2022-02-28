import Cookies from 'js-cookie';

export const login = (jwt) => {
    Cookies.set('JWT',jwt);
}

export const logout = (jwt) => {
    Cookies.remove("JWT", jwt);
};

export const isLogin = () => {
     if (Cookies.get("JWT")) {
         return true;
     }
     return false;
};

export const getToken = () => {
    return Cookies.get("JWT");
};
