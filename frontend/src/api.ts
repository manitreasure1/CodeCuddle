import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
     withCredentials: true
})
export default api;



type RequestJsonData = {
    [key: string]: any
}

export async function sendReq({ reqData }: { reqData: RequestJsonData;}): Promise<RequestJsonData> {
    return api.post("/", { reqData });
} 