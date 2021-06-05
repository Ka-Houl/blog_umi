import requestAxios from '@/request';

// export const getViewsNum: () => Promise<any> = () => {
//   return requestAxios({ url: '/getViewsNum' });
// };
export const getViewsNum = <T>() => {
  return requestAxios<T>({ url: '/getViewsNum' });
};
