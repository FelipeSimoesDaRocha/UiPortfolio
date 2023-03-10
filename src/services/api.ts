// Axios
import axios from "axios";

// interceptor
import { interceptor } from "./interceptor";

// Models
import { User, Address } from "models";


const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
const apiCep = axios.create({ baseURL: process.env.NEXT_PUBLIC_VIACEP_API_URL });

interceptor(api);

// Viacep
export const getAddress = (cep: string) => apiCep.get<Address>(`${cep}/json`);

// Application
export const authenticate = (values: { email: string; password: string }) =>
    api.post<User>("Login/authenticate", values);

