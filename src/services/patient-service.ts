import axios, { AxiosResponse } from 'axios';
import { Patient } from '@/types/interfaces/Patient';

export default {
  config: { headers: { 'Cache-Control': 'no-cache' } },

  getPatient(centerId: string, patientId: string ): Promise<AxiosResponse<Patient>> {
    patientId = btoa(decodeURIComponent(patientId));
    return axios.get(`/connectservices/center/${centerId}/patient/${patientId}`, this.config);
  },

  getConditionsAndAllergies(mpi: string) {
    return axios.get(`/rest/services/mpi-patients/${mpi}?_${new Date().getTime()}`);
  }
};
