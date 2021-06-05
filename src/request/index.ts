import { request } from 'umi';
import config from '@/config/url';
interface IAxios {
  url: string;
  method?: string;
  params?: any;
  data?: any;
  headers?: any;
}
const requestAxios = <T = any>({
  url,
  method = 'get',
  params,
  data,
  headers,
}: IAxios) => {
  url = config.baseUrl + url;
  return request(url, { method, params, data, headers }).then(res => {
    if (res.code === 0 || res.code === 200) {
      return res.data as T;
    } else {
      return Promise.reject();
    }
  });
};

export default requestAxios;
