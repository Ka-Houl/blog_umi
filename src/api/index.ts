import requestAxios from '@/request';

export const getViewsNum = () => {
  return requestAxios({ url: '/getViewsNum' });
};
