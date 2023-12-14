import axiosInstance from "@/plugins/axiosInstance";


export const handleLogin = async (email: string, password: string) => {
    try {
        const {data}  = await axiosInstance.post("/auth/login", { email, password });
        return data;
    } catch (error) {
        return error
    }
}