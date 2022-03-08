import Cookies from "js-cookie";


export const SERVER_NAME_DEV = "http://127.0.0.1:8000";
export const BASE_URL = SERVER_NAME_DEV + "/api";

let JWT = null;

if (Cookies.get("JWT") !== undefined) {
    JWT = Cookies.get("JWT");
}

export const JWT_HEADER = JWT;

export const LOGIN_API = `${BASE_URL}/login`;
export const REGISTER_API = `${BASE_URL}/register`;
export const LOGOUT_API = `${BASE_URL}/logout`;
export const SHOW_INBOX = (user_id) => `${BASE_URL}/inbox/${user_id}`;
export const CREATE_OUTWARD = `${BASE_URL}/outward`;
export const SHOW_OUTWARD = (user_id) => `${BASE_URL}/outward/${user_id}`;
export const SHOW_DETAIL_INBOX = (user_id) => `${BASE_URL}/inbox/${user_id}/detail`;
export const SHOW_EMPLOYEE = (user_id) => `${BASE_URL}/employee/${user_id}`;
export const SHOW_ALL_EMPLOYEE = `${BASE_URL}/employee`;
export const SHOW_TYPE_MAIL = `${BASE_URL}/typemail`;


