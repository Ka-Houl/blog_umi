export interface globalModelState {
  name: string;
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
  subscriptions: {},
  reducers: {
    save(state, action) {
      const payload = action.payload;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
