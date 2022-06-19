import axios from 'axios';
import {baseUrl} from '../constants';
import {showLoading, hideLoading} from '../store/authSlice';
let store;
export const injectStore = _store => {
  store = _store;
};
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
instance.defaults.headers.common.Accept = 'application/json';
instance.interceptors.request.use(async config => {
  console.log(config)
  config.params = {
    ...config.params,
    api_key: '2ee7b1236ceea9a5860b138386abe32e',
  };

  store.dispatch(showLoading());
  return config;
});

instance.interceptors.response.use(
  response => {
    store.dispatch(hideLoading());
    return response;
  },
  async error => {
    console.log(error);
    store.dispatch(hideLoading());
    if (typeof error.response === 'object') {
      if (error.response.status === 401) {
        console.log('TOKEN HATASI');
      } else {
        //store.dispatch(showAlert())

        console.log('HATA MESAJINI GÖSTER ALERT VS');
      }
    } else {
      //İNTERNET BAĞLANTISI SORUN VAR MESAJ GÖSTER
    }
    //store.dispatch(hideLoading());
    return Promise.reject(error);
  },
);
export default instance;
