
import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSucess, this.handleError);
        this.instance = instance;
        console.log("1");
    }

    handleSucess(response) {
        console.log(response);
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        console.log("2");

        return this.instance.get(url);
    }

}
export default new AxiosService();