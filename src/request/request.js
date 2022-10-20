import axios from "axios"

export function request(config) {
    const instance = axios.create({
        baseURL: "http://www.xiehanxin.com:8080/index.php",
        //baseURL: "http://localhost:8080",
        timeout: 5000
    });
    return instance(config);
}