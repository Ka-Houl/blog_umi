import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface globalModelState {
  name?: string;
  guideStep: number;
}
export interface globalModelType<T> {
  namespace: string;
  state: T;
  effects: {
    setData: Effect;
  };
  reducers: {
    save: Reducer<globalModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
export default {
  namespace: 'global',

  state: {
    guideStep: 1,
  },

  effects: {
    *setData({ payload, callback }, { call, put, select }) {
      try {
        const guideStep = yield select(state => state.global.guideStep);
        yield put({
          type: 'save',
          payload: {
            guideStep: guideStep + 1,
          },
        });
        return {};
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
  reducers: {
    save(state, action) {
      const payload = action.payload;
      return {
        ...state,
        ...payload,
      };
    },
  },
} as globalModelType<globalModelState>;
