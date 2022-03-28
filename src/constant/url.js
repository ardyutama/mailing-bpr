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
export const CREATE_OUTWARD = `${BASE_URL}/nota`;
export const CREATE_APPROVER = `${BASE_URL}/approver`;
export const CREATE_DISPOSITION_REGISTER = `${BASE_URL}/dispositionRegister`;
export const CREATE_DISPOSITION = `${BASE_URL}/dispositionMail`;
export const SHOW_ALL_EMPLOYEE = `${BASE_URL}/user`;
export const UPDATE_APPROVER = (user_id,nota_id) => `${BASE_URL}/approver/${user_id}/${nota_id}`;
export const SHOW_INBOX = (user_id) => `${BASE_URL}/nota/masuk/${user_id}`;
export const SHOW_PENDING_OUTWARDS = (user_id) => `${BASE_URL}/nota/pending/${user_id}`;
export const SHOW_OUTWARD = (user_id) => `${BASE_URL}/nota/keluar/${user_id}`;
export const SHOW_NEW_OUTWARDS = (user_id) => `${BASE_URL}/coba/keluar/${user_id}`;
export const SHOW_DISPOSITION = (user_id) => `${BASE_URL}/disposition/${user_id}`;
export const SHOW_EMPLOYEE = (user_id) => `${BASE_URL}/user/${user_id}`;
export const SHOW_APPROVER = (user_id) => `${BASE_URL}/approver/${user_id}`;

