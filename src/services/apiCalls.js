
import axios from 'axios';

export const logMeDummyJSON = async (user) => {

    return await axios.post(`https://dummyjson.com/auth/login`, user);
}