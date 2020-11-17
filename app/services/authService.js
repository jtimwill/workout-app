import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';
import http from './httpService';

const key = "json_web_token";

async function getToken() {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (err) {
        console.log("Token lookup failed " + err);
    }
}

async function login(email, password) {
    const { data } = await http.post("/login", { email, password });
    tokenLogin(data.jwt)
}

async function logout() {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (err) {
        console.log("Token deletion failed " + err);
    }
}

async function tokenLogin(value) {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (err) {
        console.log("Token storage failed " + err);
    }
}

async function getUser() {
    const jwt = await getToken();
    const decoded = jwt_decode(jwt);
    if (decoded) return decoded;
    return null;
}

export default {
    getToken,
    login,
    logout,
    tokenLogin,
    getUser
}