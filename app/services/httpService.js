import { create } from "apisauce";
import auth from "./authService";
 
const http = create({
  baseURL: "http://192.168.1.6:9000/api",
});

http.addAsyncRequestTransform(async (request) => {
    const token = await auth.getToken();
    request.headers["x-auth-token"] = token;
});
 
export default http;