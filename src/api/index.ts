import requestAxios from '@/request';

// 获取浏览数
export const getViewsNum = <T>() => {
  return requestAxios<T>({ url: '/getViewsNum' });
};

// 添加浏览数
export const addViewsNum = <T>() => {
  return requestAxios<T>({ url: '/addViewsNum' });
};

// 获取文章列表
export const getArticleList = <T>() => {
  return requestAxios<T>({ url: '/getArticleList' });
};
