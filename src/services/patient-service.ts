import axios, { AxiosResponse } from 'axios';

export default {
  config: { headers: { 'Cache-Control': 'no-cache' } },

  getPatient(centerId: string, patientId: string ): Promise<AxiosResponse> {
    patientId = btoa(decodeURIComponent(patientId));
    return axios.get(`/connectservices/center/${centerId}/patient/${patientId}`, this.config);
  }
};
