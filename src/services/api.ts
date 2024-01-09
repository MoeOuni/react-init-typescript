import axiosInstance from "@/plugins/axiosInstance";

export const handleLogin = async (email: string, password: string) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const handleGenerateEstimate = async (data: any) => {};

export const handleSendEmail = async (data: any) => {};

export const handleSubscribe = async (data: any) => {};
