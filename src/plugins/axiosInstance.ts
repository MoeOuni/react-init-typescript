import axios, { AxiosInstance, AxiosResponse } from "axios";
import localStorageService from "@services/localStorageService";
import ErrorHandler from "@/services/errorHandler";

const apiHost: string = import.meta.env.VITE_API_REST_API_URL;
const axiosInstance: AxiosInstance = axios.create({ baseURL: apiHost });

axiosInstance.interceptors.request.use(config => {
    const accessToken = localStorageService.getAccessToken();
    config?.headers?.setAuthorization(accessToken && `Bearer ${accessToken}`);
    return config;
  })

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    function (error) {
        if (error.response) {
            const { status } = error.response;
            if (status === 500) {
                // Handle 500 error
                // Example: show an error message to the user
                ErrorHandler.handleUnexpectedError(error);
            } else if (status === 401) {
                // Handle 401 error
                // Example: redirect to login page
                // window.location.href = "/login";
                ErrorHandler.handleExpectedError("Your session has expired. Please log in again.");
            } else if (status === 403) {
                // Handle 403 error
                // Example: show an access denied message to the user
                ErrorHandler.handleExpectedError("You don't have permission to access this resource.");
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
