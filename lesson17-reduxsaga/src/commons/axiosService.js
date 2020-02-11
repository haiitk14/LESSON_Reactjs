
import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSucess, this.handleError);
        this.instance = instance;
    }

    handleSucess(response) {
        console.log(response);
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        let res = this.instance.get(url); 
        console.log(res);
        return res;
    }

}
export default new AxiosService();