import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: '528847439a1745bf8a810b0c83412aff'
    }
})