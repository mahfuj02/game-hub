import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'26f197fc5ed346248252ec4e00ac281a',
    }
})