
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8b82d.firebaseio.com/'
});

export default instance;
