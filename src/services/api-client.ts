import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
  }
  

export const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'26f197fc5ed346248252ec4e00ac281a',
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = ( config: AxiosRequestConfig ) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }
}

export default APIClient
