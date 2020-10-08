import axios, { AxiosResponse } from 'axios';

export default {
  getData(): Promise<AxiosResponse> {
    return axios.get(`/api/endpoint`);
  }
};
