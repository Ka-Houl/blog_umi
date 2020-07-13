export default {
  namespace: 'index',
  state: { data: 111 },
  effects: {
    *fetchData({ payload }, { call, put, select }) {
      const data = yield select(state => state.index.data);

      yield put({
        type: 'save',
        payload: {
          data: data + 'A',
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
