import { request } from 'umi';
import config from '@/config/url';
interface IAxios {
  url: String;
  method?: String;
  params?: any;
  data?: any;
  headers?: any;
}
const requestAxios = ({
  url,
  method = 'get',
  params,
  data,
  headers,
}: IAxios) => {
  url = config.baseUrl + url;
  return request(url, { method });
};

export default requestAxios;
