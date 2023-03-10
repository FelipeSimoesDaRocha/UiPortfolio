import { AxiosInstance } from 'axios';
import Cookie from 'universal-cookie';

export const interceptor = (api: AxiosInstance) => {
  const requestHandler = (request: any) => {
    const cookie = new Cookie();
    const token = cookie.get("token_user");

    if (token && request.headers) {
      request.headers.Authorization = `Bearer ${token}`
    }
    return request;
  };

  const responseHandler = (response: any) => {
    if (response.status === 401) {
      window.location.href = "/";
    }
    return response;
  };

  const errorHandler = (error: any) => {
    if (error.response.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  };

  api.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  );

  api.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );
}
