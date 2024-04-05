import axios from 'axios';
import { responseInterceptor } from './interceptors/ResponseInterceptor';
import { errorInterceptor } from './interceptors/ErrorIntercepto';
import { Environment } from '../../../environment/Environment';

const Api = axios.create({
  baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };
