import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burgerking-295ca-default-rtdb.firebaseio.com/'
}); 

export default instance;