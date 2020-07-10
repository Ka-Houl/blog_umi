export default {
  namespace: 'index',
  state: { data: 111 },
  effects: {
    *fetchData({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          data: [11111],
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      let payload = action.payload;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
