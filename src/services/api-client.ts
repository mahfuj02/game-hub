import axios from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
  }
  

const apiClient = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'26f197fc5ed346248252ec4e00ac281a',
    }
})
export default apiClient