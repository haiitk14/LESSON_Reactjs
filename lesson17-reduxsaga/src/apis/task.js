import axiosService from './../commons/axiosService';
import { API_EMPOINT } from './../constants/index';

//localhost:3000/taks
const url = 'tasks';
export const getList = () => {
    return axiosService.get(`${API_EMPOINT}/${url}`);
}